import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/transformations/(.*)",
  "/api/webhooks/clerk",
  "/api/webhooks/stripe",
]);

const isProtectedRoute = createRouteMatcher([
  "/transformations/(.*)/update",
  "/transformations/add/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req) && !isProtectedRoute(req)) return; // if it's a public route, do nothing
  await auth.protect(); // for any other route, require auth
});

export const config = {
  matcher: [
    "/credits(.*)",
    "/profile(.*)",
    "/transformations(.*)",
    "/(api|trpc)(.*)",
  ],
};
