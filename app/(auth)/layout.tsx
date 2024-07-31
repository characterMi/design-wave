import { ClerkProvider } from "@clerk/nextjs";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf5",
        },
      }}
    >
      <main className="auth">{children}</main>
    </ClerkProvider>
  );
};
export default AuthLayout;
