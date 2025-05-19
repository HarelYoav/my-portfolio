"use client";

import { ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
}
