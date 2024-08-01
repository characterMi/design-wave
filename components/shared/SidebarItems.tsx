"use client";

import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import { HeartHandshakeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const SheetContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/menu.svg"
          alt="Menu"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent className="sm:w-64 sheet-content overflow-y-auto p-2 min-[360px]:p-6">
        <>
          <Image
            src="/assets/images/logo-text.svg"
            alt="Logo"
            width={152}
            height={23}
            className="mb-8"
          />

          <SidebarItems handleClick={() => setIsOpen(false)} />
        </>
      </SheetContent>
    </Sheet>
  );
};

const SidebarItems = ({
  handleClick = () => {},
}: {
  handleClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-nav_elements">
        {navLinks.map((link, i) => {
          const isActive = link.route === pathname;

          return (
            <li
              key={link.route}
              className="w-full truncate"
              onClick={handleClick}
            >
              {i === 7 && (
                <hr className="bg-gradient-to-r from-transparent via-[#624cf5] to-transparent h-1 w-full m-auto my-2" />
              )}

              <div
                key={link.route}
                className={`sidebar-nav_element group ${
                  isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                }`}
              >
                <Link href={link.route} className="sidebar-link">
                  <Image
                    src={link.icon}
                    alt="Logo"
                    width={24}
                    height={24}
                    className={`${isActive && "brightness-200"} size-6`}
                  />

                  {link.label}
                </Link>
              </div>
            </li>
          );
        })}

        <li className="flex-center cursor-pointer p-4 gap-2">
          <UserButton showName />
        </li>
      </ul>

      <div className="text-sm flex flex-wrap items-center gap-x-1 justify-center">
        Made with <HeartHandshakeIcon color="red" size={16} /> by
        <span className="gradient-text font-black">Abolfazl taghadosi</span>
      </div>
    </nav>
  );
};

export default SidebarItems;
