import React from "react";
import Link from "next/link";

const NavItem = ({ title, apiParam }) => {
  return (
    <div className=" hover:text-amber-500">
      <Link href={`/?genre=${apiParam}`}>{title}</Link>
    </div>
  );
};

export default NavItem;
