import NextAuth, { AuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const authOptions: AuthOptions = {
  //
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER,
      authorization: {
        params: {
          grant_type: "authorization_code",
          scope: "openid email profile",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    session({ token }) {
      return {
        accessToken: token.accessToken as string,
        idToken: token.idToken as string,
        refreshToken: token.refreshToken as string,
        expires: token.expires as string,
      };
    },
    async jwt({ token, user, account }) {
      if (account) {
        // 'account' is only available the first time this callback is called on a new session
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.idToken = account.id_token;
        token.expires = account.expires_at;
        token.refreshTokenExpires = account.refresh_expires_in;
      }
      return token;
    },
    //
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  secret: "NkGKUv6pGLziWuvQhGXOpnaIixYAwaBZFxzC1l2wpO8=",
  //debug:true
};

const handler = NextAuth(authOptions);
//
export { handler as GET, handler as POST };
