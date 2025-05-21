import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
const games = await prisma.game.findMany({
  select: {
    id: true,
    tagged: true, // ✅ Das Feld, das sonst fehlt
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




const result = games.map((game) => {
  const { order, field } = parseTagged(game.tagged || "");

  const getValue = (item: typeof game.points[0]): string | number => {
    switch (field) {
      case "field1":
        return item.user.name;
      default:
        return ""; // Fallback
    }
  };

  const topP = getTopPlayer(game.points, { order, getValue });

  const matchingEntry = game.entries.find(e => e.user.id === topP?.user.id);

  return {
    gameId: game.id,
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




function parseTagged(tagged: string): { order: 'asc' | 'desc'; field: 'field1' | 'field2' | 'field3' } {
  const order: 'asc' | 'desc' = tagged.includes("lowest") ? "asc" : "desc";

  let field: 'field1' | 'field2' | 'field3' = 'field1'; // Default

  if (tagged.includes("field1")) field = 'field1';
  else if (tagged.includes("field2")) field = 'field2';
  else if (tagged.includes("field3")) field = 'field3';

  return { order, field };
}




function getTopPlayer<T>(
  items: T[],
  options: { order: 'asc' | 'desc'; getValue: (item: T) => string | number }
): T | null {
  const { order, getValue } = options;

  if (!items.length) return null;

  const sorted = items.slice().sort((a, b) => {
    const aValue = getValue(a);
    const bValue = getValue(b);

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }

    return 0;
  });

  return sorted[0];
}





 



  return NextResponse.json(result);
}