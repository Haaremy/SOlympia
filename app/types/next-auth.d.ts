// types/next-auth.d.ts
import "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      uname: string;
      name: string;
      role: string;
      language: string;
      pointsTotal: number;
    };
  }

  interface User {
    id: string;
    uname: string;
    name: string;
    role: string;
    language: string;
    pointsTotal: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    uname: string;
    name: string;
    role: string;
    language: string;
    pointsTotal: number;
  }
}
