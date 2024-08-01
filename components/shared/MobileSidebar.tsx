import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Loader from "./Loader";
import { SheetContainer } from "./SidebarItems";

const MobileSidebar = () => {
  return (
    <header className="header">
      <Link className="flex items-center gap-2 md:py-2" href="/">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <ClerkLoading>
        <Loader />
      </ClerkLoading>

      <ClerkLoaded>
        <nav className="flex gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />

            <SheetContainer />
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </ClerkLoaded>
    </header>
  );
};
export default MobileSidebar;
