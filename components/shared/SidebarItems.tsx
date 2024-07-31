"use client";

import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import { HeartHandshakeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = () => {
  const pathname = usePathname();

  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-nav_elements">
        {navLinks.map((link, i) => {
          const isActive = link.route === pathname;

          return (
            <li key={link.route} className="w-full truncate">
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
                    className={`${isActive && "brightness-200"}`}
                  />

                  {link.label}
                </Link>
              </div>
            </li>
          );
        })}

        <li className="flex-center cursor-pointer p-4 gap-2">
          <UserButton afterSignOutUrl="/" showName />
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
