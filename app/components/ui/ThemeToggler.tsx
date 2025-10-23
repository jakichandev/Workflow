"use client";
import {SunIcon} from "@phosphor-icons/react";

import { useState } from "react";


const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className="w-16 h-8 dark:bg-theme-galaxy-200 relative p-0.5 rounded-3xl">
      <div
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`relative w-full h-full dark:bg-theme-moon-700 rounded-3xl p-0.5 cursor-pointer flex items-center`}
      >
        <div
          className={`relative w-6 h-6 rounded-full bg-theme-galaxy-300 flex items-center justify-center ${
            isDarkMode ? "left-[calc(100%-1.5rem)]" : "left-0"
          } transition-all duration-100`}
        >
          <SunIcon color="#425161" size={12} />
        </div>
      </div>
    </div>
  );
};
export default ThemeToggler;
