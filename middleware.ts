import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/feed",
  "/transformations/(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/clerk",
  "/api/webhooks/stripe",
]);

const isProtectedRoute = createRouteMatcher([
  "/transformations/(.*)/update",
  "/transformations/add/(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req) && !isProtectedRoute(req)) return; // if it's a public route, do nothing
  auth().protect(); // for any other route, require auth
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
