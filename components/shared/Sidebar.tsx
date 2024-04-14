import Image from "next/image";
import Link from "next/link";
import SidebarItems from "../SidebarItems";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link className="sidebar-logo" href="/">
          <Image
            src="/assets/images/logo-text.svg"
            alt="Logo"
            height={28}
            width={180}
          />
        </Link>

        <SidebarItems />
      </div>
    </aside>
  );
};
export default Sidebar;
