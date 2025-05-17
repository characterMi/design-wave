import { Toaster } from "@/components/ui/toaster";
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

const APP_NAME = "DesignWave";
const DESCRIPTION =
  "Design-Wave, is a large and captivating platform for editing photos using the power of AI.";

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `${APP_NAME} | %s`,
  },
  icons: {
    apple: "/assets/images/icon-192.png",
    icon: "/assets/images/icon-192.png",
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
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  appleWebApp: {
    capable: true,
    startupImage: "/assets/images/icon-512.png",
    title: APP_NAME,
  },
  applicationName: APP_NAME,
  authors: {
    name: "Abolfazl taghadosi",
    url: "https://abofazl-taghadosi.vercel.app",
  },
  category: "Image Editing",
  classification: "Image Editing",
  creator: "Abolfazl taghadosi",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL!),
  publisher: "Abolfazl taghadosi",
  openGraph: {
    title: APP_NAME,
    description: DESCRIPTION,
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og-poster.jpg`,
        width: 512,
        height: 512,
        alt: "Website Logo",
      },
    ],
    locale: "en_US",
    siteName: APP_NAME,
  },
  twitter: {
    title: APP_NAME,
    description: DESCRIPTION,
    site: process.env.NEXT_PUBLIC_SERVER_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og-poster.jpg`,
        width: 512,
        height: 512,
        alt: "Website Logo",
      },
    ],
    card: "summary",
  },
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
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf5",
        },
      }}
    >
      <html lang="en">
        <body className={cn(font.variable, "font-IBMPlex antialiased")}>
          <Toaster />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
