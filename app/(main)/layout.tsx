import Sidebar from "@/components/shared/Sidebar";
import MobileSidebar from "@/components/shared/MobileSidebar";

export const metadata = {
  title: "Home",
  description: "AI-Powered image generator",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />

      <MobileSidebar />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};
export default RootLayout;
