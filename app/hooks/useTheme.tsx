"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/theme/ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context?.theme || !context?.toggleTheme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
