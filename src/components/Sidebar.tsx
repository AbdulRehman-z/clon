"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideBarLinks } from "../constants/links";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex flex-col justify-between h-screen w-fit p-6 pt-24 bg-dark-1 max-sm:hidden max-lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sideBarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              key={item.route}
              href={item.route}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg justify-start",
                isActive ? "bg-blue-1" : "hover:bg-dark-2"
              )}
            >
              <Image src={item.icon} alt={item.lable} width={24} height={24} />
              <span className="text-white text-lg max-sm:hidden">
                {item.lable}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
