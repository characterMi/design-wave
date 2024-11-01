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
        />
      </Link>

      <ClerkLoading>
        <Loader />
      </ClerkLoading>

      <ClerkLoaded>
        <div className="flex gap-2 items-center">
          <SignedIn>
            <UserButton />

            <SheetContainer />
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </ClerkLoaded>
    </header>
  );
};
export default MobileSidebar;
