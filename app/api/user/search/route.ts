import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  console.log('Query:', query);

  // Run raw SQL search by credentials or name
 const nutzer = await prisma.nutzer.findMany({
  where: {
    OR: [
      { uname: { contains: query } },
      { name: { contains: query } }
    ]
  }
});
  const foundTeam = nutzer[0]!;

  return NextResponse.json({
    found: true,
    user: {
      id: foundTeam.id,
      uname: foundTeam.uname,
      name: foundTeam.name,
    },
  });
}
