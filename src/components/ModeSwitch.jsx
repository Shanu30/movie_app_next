"use client";

import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const ModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer text-xl hover:text-amber-500"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <MdDarkMode
          className="cursor-pointer text-xl hover:text-amber-500"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
};

export default ModeSwitch;
