import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div>
      <aside className="flex h-screen w-60 bg-black flex-col overflow-y-hidden border-r px-5 py-8">
        <Link href="/store" className="flex">
          <Logo />
        </Link>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <NavLinks />
            </div>
          </nav>
        </div>
        <form>
          <button className="flex  grow justify-start items-center gap-x-1 hover:bg-sky-100 bg-gray-50 rounded-md px-4 py-2 font-medium">
            <ArrowLeftOnRectangleIcon className="w-6" />
            Sign Out
          </button>
        </form>
      </aside>
    </div>
  );
};

export default Sidebar;
