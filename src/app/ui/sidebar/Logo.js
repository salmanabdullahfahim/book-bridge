import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-x-1 items-center text-white font-semibold">
      <BookOpenIcon className="h-12 w-12" />
      <p className="text-md">Book Bridge</p>
    </div>
  );
};

export default Logo;
