"use client";

import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function AuthWrapper({ children }: any) {
  const { status } = useSession();
  const path = usePathname();

  if (status === "authenticated") {
    return children;
  } else if (status === "unauthenticated") {
    signIn("cognito", { callbackUrl: path });
  }
}
