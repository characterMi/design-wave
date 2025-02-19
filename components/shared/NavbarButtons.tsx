"use client";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const NavbarButtons = () => {
  return (
    <div className="items-center gap-x-4 hidden smart-watch:flex">
      <ClerkLoading>
        <Loader />
      </ClerkLoading>

      <ClerkLoaded>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
};

export default NavbarButtons;
