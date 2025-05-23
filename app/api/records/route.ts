import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  // Hole alle Spiele
  const games = await prisma.game.findMany({
    select: {
      id: true,
      tagged: true,
      entries: {
        select: {
          value: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      languages: {
        select: {
          title: true,
          gameId: true,
        },
      },
      points: {
        select: {
          value: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  // Verarbeite die Spiele und finde den Top-Spieler
  const result = games.map((game) => {
    // Funktion zum Abrufen des Spieler-Namens
    const getValue = (item: any): number => item.value;

    // Hole den besten Spieler basierend auf den Punkten
    const topP = getTopPlayer(game.points, { order: 'desc', getValue });

    // Finde den passenden Eintrag
    const matchingEntry = game.entries.find(e => e.user.id === topP?.user.id);

    return {
      gameId: game.id,
      gameName: game.languages[0].title,
      topPlayer: topP?.user.name || null,
      topPoints: topP?.value || null,
      topEntries: matchingEntry?.value || null,
      tagged: game.tagged,
      user: topP?.user
        ? {
            id: topP.user.id,
            name: topP.user.name,
          }
        : null,
    };
  });

  return NextResponse.json(result);
}

// Funktion zum Abrufen des besten Spielers basierend auf Punkten
function getTopPlayer<T>(
  items: T[],
  options: { order: 'asc' | 'desc'; getValue: (item: T) => number }
): T | null {
  const { order, getValue } = options;

  if (!items.length) return null;

  const sorted = items.slice().sort((a, b) => {
    const aValue = getValue(a);
    const bValue = getValue(b);

    // Sortiere die Werte entsprechend der Reihenfolge
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  return sorted[0];
}
