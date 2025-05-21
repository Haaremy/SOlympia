import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function gameSettings() {
  try {
    // Create gameSettings with the required properties
    const gameSettings = await prisma.gameSettings.create({
      data: {
        started: true,    // Initially, the game hasn't started
        ending: new Date("2025-06-12T20:30:00.000Z"),  // Set an ending time for the game
      },
    });


  } catch (error) {
    console.error("Error creating game settings:", error);
  } finally {
    await prisma.$disconnect();  // Disconnect the Prisma client when done
  }
}
