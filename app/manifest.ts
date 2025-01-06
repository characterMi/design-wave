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
        src: "/assets/images/d1.png",
        sizes: "1440x900",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/assets/images/d2.png",
        sizes: "1440x900",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/assets/images/d3.png",
        sizes: "1440x900",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/assets/images/5.jpg",
        sizes: "1080x2260",
        type: "image/jpg",
      },
      {
        src: "/assets/images/1.jpg",
        sizes: "1080x2262",
        type: "image/jpg",
      },
      {
        src: "/assets/images/2.jpg",
        sizes: "1080x2260",
        type: "image/jpg",
      },
      {
        src: "/assets/images/3.jpg",
        sizes: "1080x2257",
        type: "image/jpg",
      },
      {
        src: "/assets/images/4.jpg",
        sizes: "1080x2257",
        type: "image/jpg",
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
            src: "/assets/images/feed.png",
            sizes: "192x192",
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
            src: "/assets/images/profile.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
