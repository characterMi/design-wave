import { Manifest } from "next/dist/lib/metadata/types/manifest-types";

export default function manifest(): Manifest {
  return {
    id: "/",
    name: "DesignWave",
    short_name: "DesignWave",
    description:
      "Design-Wave, is a large and captivating platform for editing photos using the power of AI.",
    start_url: ".",
    orientation: "portrait",
    theme_color: "#624cf5",
    display: "standalone",
    scope: ".",
    icons: [
      {
        src: "/assets/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/images/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/images/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    background_color: "#ffffff",
    screenshots: [
      {
        src: "/assets/images/design-wave_third.png",
        sizes: "800x500",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/assets/images/design-wave_responsive.png",
        sizes: "384x831",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Feed",
        short_name: "Feed",
        description: "Feed",
        url: "/feed",
        icons: [
          {
            src: "/assets/images/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/images/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      {
        name: "Profile",
        short_name: "Profile",
        description: "Profile",
        url: "/profile",
        icons: [
          {
            src: "/assets/images/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/images/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
