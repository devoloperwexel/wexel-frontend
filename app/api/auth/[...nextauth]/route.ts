import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createHmac } from "crypto";
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import axios from "axios";

const client = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

const getHashSecret = (username: string) => {
  const hasher = createHmac("sha256", process.env.COGNITO_CLIENT_SECRET!);
  hasher.update(`${username}${process.env.COGNITO_CLIENT_ID!}`);
  return hasher.digest("base64");
};

const getUserByEmail = async (email: string, accessToken: string) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  const getUserBySubRequest = { params: { email }, headers };
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
      getUserBySubRequest
    );
    const user = response.data?.data.results[0];
    if (!user) {
      throw Error("User not found!");
    }

    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Something went to wrong");
  }
};

export const authOptions: AuthOptions = {
  //
  providers: [
    CredentialsProvider({
      name: "Cognito",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        if (!credentials) return null;

        const params: InitiateAuthCommandInput = {
          AuthFlow: "USER_PASSWORD_AUTH",
          ClientId: process.env.COGNITO_CLIENT_ID as string,
          AuthParameters: {
            USERNAME: credentials.username,
            PASSWORD: credentials.password,
            SECRET_HASH: getHashSecret(credentials.username),
          },
        };

        const signinCommand = new InitiateAuthCommand(params);
        const response = await client.send(signinCommand);
        //
        const { AccessToken, RefreshToken, IdToken, ExpiresIn } =
          response.AuthenticationResult!;
        // Get user data from backend
        const user = await getUserByEmail(credentials.username, AccessToken!);

        const token = {
          id: response.ChallengeParameters?.USER_ID_FOR_SRP as string,
          accessToken: AccessToken,
          refreshToken: RefreshToken,
          idToken: IdToken,
          expiresAt: ExpiresIn,
          user,
        };

        return token;
      },
    }),
  ],
  callbacks: {
    session({ token }) {
      const { user } = token as {
        user: User;
      };

      return {
        accessToken: token.accessToken as string,
        idToken: token.idToken as string,
        refreshToken: token.refreshToken as string,
        expires: token.expires as string,
        user,
      };
    },
    async jwt({ token, user, account }) {
      if (account) {
        // 'account' is only available the first time this callback is called on a new session
        token.accessToken = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
        token.idToken = (user as any).idToken;
        token.expires = (user as any).expiresAt;
        //token.refreshTokenExpires = account.refresh_expires_in;
        token.user = (user as any).user;
      }
      return token;
    },
    //
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
//
export { handler as GET, handler as POST };
