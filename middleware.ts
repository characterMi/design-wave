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

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req) && !isProtectedRoute(req)) return; // if it's a public route, do nothing
  await auth.protect(); // for any other route, require auth
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
