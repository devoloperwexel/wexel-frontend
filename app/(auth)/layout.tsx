import { Metadata } from "next";
import AuthWrapper from "utils/auth-warpper";
import { ReactNode } from "react";
import { Barlow } from "next/font/google";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const title = "Next.js Prisma Postgres Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

type AuthLayoutProps = {
  children: ReactNode;
};
const barlow = Barlow({ weight: "400", subsets: ["latin"] });
export default async function Layout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <div className={barlow.className}>
      <AuthWrapper>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthWrapper>
    </div>
  );
}
