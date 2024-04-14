import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Sign Up",
  description: "This is sign-up page where You can create Your account.",
};

const SignUpPage = () => <SignUp />;

export default SignUpPage;
