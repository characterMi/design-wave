import Image from "next/image";
import Link from "next/link";
import SidebarButtons from "./SidebarButtons";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link className="sidebar-logo" href="/" aria-label="Go to home page">
          <Image
            src="/assets/images/logo-text.svg"
            alt="Logo"
            height={28}
            width={180}
          />
        </Link>

        <SidebarButtons />
      </div>
    </aside>
  );
};
export default Sidebar;
