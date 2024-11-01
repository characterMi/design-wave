import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Loader from "./Loader";
import SidebarItems from "./SidebarItems";

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

            <Button
              asChild
              className="button bg-transparent border-2 text-[#624cf5] hover:bg-transparent border-[#624cf5]"
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </aside>
  );
};
export default Sidebar;
