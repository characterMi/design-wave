import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: {
    default: "DesignWave",
    template: "DesignWave | %s",
  },
};

export const viewport: Viewport = {
  themeColor: "#624cf5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf5",
        },
      }}
    >
      <html lang="en">
        <body className={cn(font.variable, "font-IBMPlex antialiased")}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
