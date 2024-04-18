import MobileSidebar from "@/components/shared/MobileSidebar";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: {
    default: "Home",
    template: "DesignWave | %s",
  },
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

      <Toaster />
    </main>
  );
};
export default RootLayout;
