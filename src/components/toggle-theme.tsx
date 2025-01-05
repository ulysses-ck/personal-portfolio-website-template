"use client";

import { Icon } from "@/data/types/IIcon";
import { useTheme } from "next-themes";
import IconButton from "./icon-button";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton
      icon={theme === "dark" ? Icon.Sun : Icon.MoonStar}
      size={24}
      lightColor="black"
      darkColor="white"
      onClick={handleClick}
    />
  );
}
