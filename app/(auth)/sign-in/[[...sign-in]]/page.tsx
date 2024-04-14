import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In",
  description: "This is sign-in page where you can Sign in to your account.",
};

const SignInPage = () => <SignIn />;

export default SignInPage;
