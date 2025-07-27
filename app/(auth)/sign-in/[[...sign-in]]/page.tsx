import Loader from "@/components/shared/Loader";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In",
  description:
    "Sign in to your account and start editing images with DesignWave.",
};

const SignInPage = () => (
  <main className="flex flex-col items-center justify-center w-screen h-screen">
    <ClerkLoading>
      <Loader />
    </ClerkLoading>

    <ClerkLoaded>
      <SignIn />
    </ClerkLoaded>
  </main>
);

export default SignInPage;
