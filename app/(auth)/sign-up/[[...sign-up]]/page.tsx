import Loader from "@/components/shared/Loader";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Sign Up",
  description: "This is sign-up page where You can create Your account.",
};

const SignUpPage = () => (
  <main className="flex flex-col items-center justify-center w-screen h-screen">
    <ClerkLoading>
      <Loader />
    </ClerkLoading>

    <ClerkLoaded>
      <SignUp />
    </ClerkLoaded>
  </main>
);

export default SignUpPage;
