import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type UserCreateInput = Parameters<typeof prisma.nutzer.create>[0]['data']

type SafeUserCreateInput = Omit<UserCreateInput, 'id'>;

function getEmptyUser(overrides: Partial<SafeUserCreateInput>): SafeUserCreateInput {
  return {
    uname: '',
    password: '',
    name: '',
    role: 'USER',
    pointsTotal: 0,
    language: 'de',
    ...overrides,
  };
}


export async function userEntries() {
    const fsrTeam = await prisma.nutzer.create({
        data: getEmptyUser({
          uname: 'FBINS',
          password: 'FSR5',
          role: 'ADMIN'
        })
      });
}