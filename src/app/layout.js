import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppProvider from "@/components/AppProvider";
import theme from "@/theme";

export default function RootLayout({ children, params: { session } }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />

              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AppProvider>
      </body>
    </html>
  );
}
