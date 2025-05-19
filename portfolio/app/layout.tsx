import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { ReactNode, Suspense } from "react";

import data from "../data.json";
import "../globals.css";
import Providers from "./components/providers";

const username = process.env.GITHUB_USERNAME || data.githubUsername;
const displayName = data.displayName || username;

/** @type {import('next').Metadata} */
export const metadata = {
  title: {
    default: [username, "'s portfolio"].join(""),
    template: "%s | " + data.displayName + "'s portfolio",
  },
  description: "GitHub portfolio for " + displayName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable].join(" ")}
      suppressHydrationWarning
    >
      <body
        className={`bg-zinc-100 dark:bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <Providers>
          <main className="flex-grow overflow-auto">
            <Suspense />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
