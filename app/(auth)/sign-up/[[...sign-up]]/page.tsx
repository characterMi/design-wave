import Loader from "@/components/shared/Loader";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Sign Up",
  description: "This is sign-up page where You can create Your account.",
};

const SignUpPage = () => (
  <>
    <ClerkLoading>
      <Loader />
    </ClerkLoading>

    <ClerkLoaded>
      <SignUp />
    </ClerkLoaded>
  </>
);

export default SignUpPage;
