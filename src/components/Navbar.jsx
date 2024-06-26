"use client";
import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-6 bg-amber-200 dark:bg-gray-600 p-4">
      <NavItem title="Trending" apiParam="fetchTrending" />
      <NavItem title="Top Rated" apiParam="fetchTopRated" />
    </div>
  );
};

export default Navbar;
