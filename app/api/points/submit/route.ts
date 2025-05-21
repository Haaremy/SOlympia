//import { calculatePoints } from '@/lib/calcPoints';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions'; // Passe den Pfad ggf. an
import { NextRequest, NextResponse } from 'next/server';

interface PointsPayload {
  game: number;
  user1: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<PointsPayload>;
    const { game, user1} = body;

    if (
      typeof game !== 'number' ||
      [user1].some(p => typeof p !== 'number')
    ) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const session = await getServerSession(authOptions);

    if (!session || !session.user?.uname) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.nutzer.findUnique({
      where: { uname: session.user.uname },
    });

    if (!user) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 });
    }


    
    
    const scores = { user1 };
    
   let pointValues = (await prisma.nutzer.findUnique({
  where: { id: user.id },
  select: {
    pointsTotal: true,
  },
}))?.pointsTotal ?? 0;


    
    const pointsToInsert = [];
    const inputsToInsert = [];

      const userKey = `user${1}` as keyof typeof scores;
      const userPoints = scores[userKey] || 0;
      const field = 1;

      //let value = calculatePoints({ game, userPoints });

      const value = Math.ceil(userPoints);

     

      pointsToInsert.push({
        userId: user.id,
        gameId: game,
        player: user.name,
        value: value,
        slot: field,
      });

       inputsToInsert.push({
        userId: user.id,
        gameId: game,
        player: user.name,
        value: userPoints,
        slot: field,
      })

      pointValues += value;


    await prisma.points.createMany({
  data: pointsToInsert, // <-- enthält teamId pro Eintrag!
});

//await prisma.entries.createMany({
//  data: inputsToInsert, // <-- enthält teamId pro Eintrag!
//});

await prisma.nutzer.update({
  where: { id: user.id },
  data: {
    pointsTotal: pointValues,
  },
});


    return NextResponse.json({ success: true, inserted: pointsToInsert }, { status: 200 });

  } catch (error) {
    console.error('Error handling POST /api/points/submit:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
