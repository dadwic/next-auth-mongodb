import * as React from "react";
import SignIn from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Sign in",
};

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return <SignIn />;
}
