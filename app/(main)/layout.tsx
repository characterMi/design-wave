import Sidebar from "@/components/shared/Sidebar";

export const metadata = {
  title: "Home",
  description: "AI-Powered image generator",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};
export default RootLayout;
