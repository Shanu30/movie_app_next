"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-black dark:text-white dark:bg-black transition-colors duration-200 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
