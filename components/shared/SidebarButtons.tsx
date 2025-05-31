"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import Loader from "./Loader";
import SidebarItems, { SheetContainer } from "./SidebarItems";

const SidebarButtons = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <>
      <ClerkLoading>
        <Loader className={!isMobile ? "mx-auto" : undefined} />
      </ClerkLoading>

      <ClerkLoaded>
        <SignedIn>
          <div className="flex h-full gap-2 items-center">
            {isMobile ? (
              <>
                <UserButton />

                <SheetContainer />
              </>
            ) : (
              <SidebarItems />
            )}
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex gap-2">
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>

            {!isMobile && (
              <Button
                asChild
                className="button bg-transparent border-2 text-[#624cf5] hover:bg-transparent border-[#624cf5]"
              >
                <Link href="/sign-up">Sign up</Link>
              </Button>
            )}
          </div>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};

export default SidebarButtons;
