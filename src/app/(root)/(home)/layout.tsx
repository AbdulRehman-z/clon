import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-1 min min-h-1 max-md:pt-20 sm:pt-14 px-6 pt-28 pb-6">
          <div className=" w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
