// /api/user/register.ts
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { uname, name, password } = await req.json();

  if (!uname || !name || !password) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  const exists = await prisma.nutzer.findUnique({ where: { uname } });

  if (exists) {
    return NextResponse.json({ error: "Benutzername bereits vergeben" }, { status: 409 });
  }

  const newUser = await prisma.nutzer.create({
    data: {
      uname,
      name,
      password, // ❗ ACHTUNG: In Produktion unbedingt Passwort hashen
      role: "USER",
      language: "de",
      pointsTotal: 0,
    },
  });

  return NextResponse.json({ success: true, id: newUser.id });
}
