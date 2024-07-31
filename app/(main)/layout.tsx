import MobileSidebar from "@/components/shared/MobileSidebar";
import Sidebar from "@/components/shared/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: {
    default: "Feed",
    template: "DesignWave | %s",
  },
  description: "Browse between edits that our users have made!",
};

const WithAuthLayout = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider
    appearance={{
      variables: {
        colorPrimary: "#624cf5",
      },
    }}
  >
    <main className="root">
      <Sidebar />

      <MobileSidebar />

      <div className="h-16 block lg:hidden" />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  </ClerkProvider>
);

export default WithAuthLayout;
