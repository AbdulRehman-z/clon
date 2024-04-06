"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideBarLinks } from "../constants/links";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="ticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sideBarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.lable}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image src={item.icon} alt={item.lable} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.lable}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
