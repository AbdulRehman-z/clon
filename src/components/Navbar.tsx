import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="flex-between fixed w-full px-6 py-4 lg:px-10 z-50 bg-dark-1">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className=" max-sm:size-10"
        />
        <p className="text-white font-extrabold text-[26px] max-sm:hidden">
          Clon
        </p>
      </Link>

      <div>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
