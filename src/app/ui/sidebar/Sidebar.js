import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div>
      <Link
        href="/store"
        className="bg-violet-600  flex items-end justify-start px-4 py-2 rounded-md m-3"
      >
        <div className="">
          <Logo />
        </div>
      </Link>
      <div className="flex flex-wrap md:grow justify-center gap-2 flex-row md:justify-between space-x-2 md:flex-col ">
        <NavLinks />

        <form>
          <button>Sign Out</button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
