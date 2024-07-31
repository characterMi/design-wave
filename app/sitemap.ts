import { getImageIds } from "@/actions/image.actions";

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/feed",
    "/sign-in",
    "/sign-up",
    "/credits",
    "/profile",
    "/transformations/add/restore",
    "/transformations/add/fill",
    "/transformations/add/remove",
    "/transformations/add/recolor",
    "/transformations/add/removeBackground",
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const imageIds = await getImageIds();

  const transformations = imageIds.map(({ id }: any) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/transformations/${id}`,
    lastModified: new Date().toISOString(),
  }));

  const dynamicRoutes = [
    ...transformations,
    ...imageIds.map(({ id }: any) => ({
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/transformations/${id}/update`,
      lastModified: new Date().toISOString(),
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
