import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
     const user = await prisma.nutzer.findMany({
      orderBy: { pointsTotal: "desc" },
      include: {
        points: {
          include: {
            game: {
              select: {
                id: true,
                tagged: true,
                languages: {
                  select: {
                    title: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const transformedUsers = user.map(user => ({
  ...user,
  points: user.points.map(point => ({
    ...point,
    game: {
      ...point.game,
      languages: point.game.languages.map(lang => lang.title),
    },
  })),
}));


    return NextResponse.json(transformedUsers);
  } catch (error) {
    console.error("Fehler beim Laden der Teams:", error);
    return NextResponse.json({ error: "Fehler beim Laden der Teams" }, { status: 500 });
  }
}
