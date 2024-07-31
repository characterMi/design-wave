import Loader from "@/components/shared/Loader";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In",
  description: "This is sign-in page where you can Sign in to your account.",
};

const SignInPage = () => (
  <>
    <ClerkLoading>
      <Loader />
    </ClerkLoading>

    <ClerkLoaded>
      <SignIn />
    </ClerkLoaded>
  </>
);

export default SignInPage;
