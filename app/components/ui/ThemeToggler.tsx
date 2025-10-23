"use client";
import { SunIcon } from "@phosphor-icons/react";
import { useTheme } from "@/app/hooks/useTheme";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-16 h-8 bg-theme-moon-200 dark:bg-theme-galaxy-600 relative p-0.5 rounded-3xl">
      <div
        onClick={() => toggleTheme()}
        className={`relative w-full h-full dark:bg-theme-moon-500 rounded-3xl p-0.5 cursor-pointer flex items-center`}
      >
        <div
          className={`relative w-6 h-6 rounded-full bg-theme-galaxy-500 dark:bg-theme-galaxy-300 flex items-center justify-center ${
            theme === "dark" ? "left-[calc(100%-1.5rem)]" : "left-0"
          } transition-all duration-200`}
        >
          <SunIcon color="var(--color-icon-toggler)" size={12} />
        </div>
      </div>
    </div>
  );
};
export default ThemeToggler;
