import Image from "next/image";
import Link from "next/link";
import SidebarButtons from "./SidebarButtons";

const MobileSidebar = () => {
  return (
    <header className="header">
      <Link
        className="flex items-center gap-2 md:py-2"
        href="/"
        aria-label="Go to home page"
      >
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
          className="w-44 object-cover"
        />
      </Link>

      <SidebarButtons isMobile />
    </header>
  );
};
export default MobileSidebar;
