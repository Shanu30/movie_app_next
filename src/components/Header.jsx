import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import ModeSwitch from "./ModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between py-3 px-6 items-center">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <ModeSwitch />
        <Link
          href={"/"}
          className="font-bold text-2xl bg-amber-500 py-1 px-2 rounded"
        >
          IMDb
        </Link>
      </div>
    </div>
  );
};

export default Header;
