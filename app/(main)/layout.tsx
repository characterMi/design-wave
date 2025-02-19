import MobileSidebar from "@/components/shared/MobileSidebar";
import Sidebar from "@/components/shared/Sidebar";

export const metadata = {
  title: {
    default: "Feed",
    template: "DesignWave | %s",
  },
  description: "Browse between edits that our users have made!",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="root">
    <Sidebar />

    <MobileSidebar />

    <div className="h-16 block lg:hidden" aria-hidden />

    <div className="root-container">
      <div className="wrapper">{children}</div>
    </div>
  </main>
);

export default MainLayout;
