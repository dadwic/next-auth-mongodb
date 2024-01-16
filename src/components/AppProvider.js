"use client";

import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

export default function AppProvider({ children, session }) {
  return (
    <SessionProvider session={session}>
      <SnackbarProvider preventDuplicate maxSnack={1}>
        {children}
      </SnackbarProvider>
    </SessionProvider>
  );
}
