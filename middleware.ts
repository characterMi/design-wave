import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: ['/anyone-can-visit-this-route'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
