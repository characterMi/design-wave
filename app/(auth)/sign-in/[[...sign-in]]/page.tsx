import Loader from "@/components/shared/Loader";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In",
  description: "This is sign-in page where you can Sign in to your account.",
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
