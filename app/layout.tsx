import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
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
  keywords: [
    "design wave",
    "design",
    "wave",
    "edit",
    "editor",
    "image editor",
    "ai",
    "background removal",
    "generate fill",
  ],
};

export const viewport: Viewport = {
  themeColor: "#624cf5",
  width: "device-width",
  colorScheme: "only light",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.variable, "font-IBMPlex antialiased")}>
        <Toaster />

        {children}
      </body>
    </html>
  );
}
