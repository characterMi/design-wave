import Image from "next/image";
import Link from "next/link";
import SidebarItems from "../SidebarItems";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import Loader from "../Loader";
import { Button } from "../ui/button";

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

        <ClerkLoading>
          <Loader className="mx-auto" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <SidebarItems />
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </aside>
  );
};
export default Sidebar;
