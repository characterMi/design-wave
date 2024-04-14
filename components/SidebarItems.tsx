"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = () => {
  const pathname = usePathname();

  return (
    <nav className="sidebar-nav">
      <SignedIn>
        <ul className="sidebar-nav_elements">
          {navLinks.map((link) => {
            const isActive = link.route === pathname;

            return (
              <li
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
                    className={`${isActive && "brightness-200"}`}
                  />

                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </SignedIn>

      <SignedOut></SignedOut>
    </nav>
  );
};
export default SidebarItems;
