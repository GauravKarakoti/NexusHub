import NextAuth from "next-auth";

// TODO 1: Implement NextAuth configuration
// Contributors need to set up PrismaAdapter, configure OAuth providers (GitHub/Google), 
// and set up Credentials provider for email/password.
const handler = NextAuth({
  providers: [
    // TODO 2: Add providers here
  ],
  callbacks: {
    // TODO 3: Append user ID and role to session object
  },
  pages: {
    // TODO 4: Map custom sign-in and error pages
  }
});

export { handler as GET, handler as POST };