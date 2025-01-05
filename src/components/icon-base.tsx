"use client";

import { useTheme } from "next-themes";
import { CiTwitter } from "react-icons/ci";
import { FiGithub, FiPhone } from "react-icons/fi";
import { FaFigma, FaRegEnvelope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { LuCopy, LuMoonStar, LuSun, LuMenu, LuExternalLink } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import type { IconType } from "react-icons";
import { Icon } from "@/data/types/IIcon";

interface IconBaseProps {
  icon: Icon;
  lightColor: string;
  darkColor: string;
  size: 24 | 32;
}

const IconComponent: Record<Icon, IconType> = {
  [Icon.Twitter]: CiTwitter,
  [Icon.Github]: FiGithub,
  [Icon.Phone]: FiPhone,
  [Icon.Figma]: FaFigma,
  [Icon.Envelope]: FaRegEnvelope,
  [Icon.Copyright]: FaRegCopyright,
  [Icon.Copy]: LuCopy,
  [Icon.MoonStar]: LuMoonStar,
  [Icon.Sun]: LuSun,
  [Icon.Menu]: LuMenu,
  [Icon.Close]: AiOutlineClose,
  [Icon.Location]: IoLocationOutline,
  [Icon.ExternalLink]: LuExternalLink,
};

export default function IconBase({ icon, size }: IconBaseProps) {
  const { theme } = useTheme();
  const Icon: IconType = IconComponent[icon];
  return (
    <span className={theme === "light" ? "text-gray-600" : "text-gray-dark-600"}>
      <Icon size={size} />
    </span>
  );
}
