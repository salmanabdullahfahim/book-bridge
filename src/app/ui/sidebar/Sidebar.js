import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div>
      <Link href="/store">
        <Logo />
      </Link>
      <div>
        <NavLinks />

        <form>
          <button>Sign Out</button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
