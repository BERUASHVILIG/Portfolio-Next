import Image from "next/image";

import Link from "next/link";

// components

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"} className="h2 xl:mt-12">
            <div className="text-2xl">
              <span className="text-white font-bold text-2xl">
                Giorgi Beruashvili
              </span>
              <span className="text-accent">.</span>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
