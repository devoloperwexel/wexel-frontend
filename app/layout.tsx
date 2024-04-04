// These styles apply to every route in the application
import "swiper/css";
import "swiper/css/navigation";
import '../public/assets/css/style.css';
import 'node_modules/react-modal-video/scss/modal-video.scss';

import { Metadata } from "next";

import Layout from '../components/layout/layout'

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
  creator: "shadcn",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en">
      <body className=" font-siliguri" > 

        <Layout>
          {children}
        </Layout>

      </body>
    </html>
  );
}
