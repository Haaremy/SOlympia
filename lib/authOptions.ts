import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./db";  // Prisma Client

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        

       

        const username = credentials?.username;
        const password = credentials?.password;

        // Check if both username and password are provided
        if (!username || !password) {
          console.error("Missing login credentials.");
          return null;
        }

        try {
          // Search for the nutzer in the database using the username
          const nutzer = await prisma.nutzer.findUnique({
            where: { uname: username },
          });

          // Check if nutzer exists and password matches
          if (!nutzer || nutzer.password !== password) {

            console.error("Invalid username or password.");
            return null;
          }
          const user: User = {
          //id: '2',
          id: String(nutzer.id),
          //credentials: "DUMMY",
          uname: nutzer.uname,
          //role: 'USER',
          role: nutzer.role,
          //language: 'de',
          language: nutzer.language,
          //name: 'Dummynutzer#1',
          name: nutzer.name,
          //pointsTotal: 0
          pointsTotal: nutzer.pointsTotal
        };
          return user;
        } catch (error) {
          // Handle errors, e.g., Prisma query errors
          console.error("Error fetching nutzer:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // JWT-based sessions
    maxAge: 43200, // 12 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Store user data in the token
        token.id = user.id;
        token.uname = user.uname;
        token.role = user.role;
        token.language = user.language;
        token.name = user.name;
        token.pointsTotal = user.pointsTotal;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Attach the token data to the session object
        session.user = {
          id: token.id as string,
          uname: token.uname as string,
          role: token.role as string,
          language: token.language as string,
          name: token.name as string,
          pointsTotal: token.pointsTotal as number,
        };
      }
      return session;
    },
  },
};
