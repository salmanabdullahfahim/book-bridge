import {
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  RectangleStackIcon,
  CogIcon,
  TruckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

import Link from "next/link";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { name: "Community", href: "/store/community", icon: UserGroupIcon },
  { name: "Settings", href: "/store/settings", icon: CogIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
          >
            <IconComponent className="w-5 h-5" />

            <span className="mx-2 text-sm font-medium">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
