import * as React from "react";
import Profile from "@/components/Profile";
import AppWrapper from "@/components/AppWrapper";

export const metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  return (
    <AppWrapper>
      <Profile />
    </AppWrapper>
  );
}
