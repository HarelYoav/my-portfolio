"use client";

import { useEffect, useState } from "react";

// import { IconMoon, IconSun } from "@tabler/icons-react";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

import useSystemTheme from "../hooks/use-system-theme";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className={
        theme === "dark"
          ? "rounded p-2 dark:hover:bg-gray-700"
          : "rounded p-2 hover:bg-gray-100"
      }
    >
      {theme === "dark" ? (
        <CiSun className="h-6 w-6 cursor-pointer dark:text-white" />
      ) : (
        <FaMoon className="h-6 w-6 cursor-pointer dark:text-white" />
      )}
    </button>
  );
}
