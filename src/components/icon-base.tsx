"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { CiTwitter } from "react-icons/ci";
import { FiGithub, FiPhone } from "react-icons/fi";
import { FaFigma, FaRegEnvelope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { LuCopy, LuMoonStar, LuSun, LuMenu, LuExternalLink } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiCypress, SiExpress, SiGit, SiMongodb, SiNestjs, SiNextdotjs, SiPostgresql, SiSass, SiSocketdotio, SiStorybook, SiTailwindcss, SiTypescript } from "react-icons/si";


import type { IconType } from "react-icons";
import { Icon } from "@/data/types/IIcon";

interface IconBaseProps {
  icon: Icon;
  lightColor: string;
  darkColor: string;
  size: 16 |24 | 32;
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
  [Icon.JavaScript]: DiJavascript,
  [Icon.TypeScript]: SiTypescript,
  [Icon.React]: GrReactjs,
  [Icon.NextJs]: SiNextdotjs,
  [Icon.NodeJs]: FaNodeJs,
  [Icon.ExpressJs]: SiExpress,
  [Icon.NestJs]: SiNestjs,
  [Icon.SocketIo]: SiSocketdotio,
  [Icon.PostgreSQL]: SiPostgresql,
  [Icon.MongoDB]: SiMongodb,
  [Icon.Sass]: SiSass,
  [Icon.TailwindCSS]: SiTailwindcss,
  [Icon.Cypress]: SiCypress,
  [Icon.Storybook]: SiStorybook,
  [Icon.Git]: SiGit,
};

export default function IconBase({ icon, size, lightColor, darkColor }: IconBaseProps) {
  const { theme } = useTheme();
  const Icon: IconType = IconComponent[icon];
  console.log(icon);
  console.log(Icon);
  const defaultColorClasses = "text-gray-600 dark:text-gray-dark-600";

  return (
    <span className={cn(defaultColorClasses, theme === "light" ? lightColor : darkColor)}>
      <Icon size={size} />
    </span>
  );
}
