import * as React from "react";
import SignUp from "@/components/SignUp";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Sign up",
};

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return <SignUp />;
}
