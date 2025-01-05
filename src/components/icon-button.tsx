import { Icon } from "@/data/types/IIcon";
import IconBase from "./icon-base";
import ButtonGeneric from "./button-generic";

interface IconButtonProps {
  icon: Icon;
  size: 24 | 32;
  lightColor: string;
  darkColor: string;
  onClick?: () => void;
}

export default function IconButton({
  icon,
  size,
  lightColor,
  darkColor,
  onClick,
}: IconButtonProps) {
  return (
    <ButtonGeneric className="p-2 bg-transparent hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-dark-100 dark:active:bg-gray-dark-200" onClick={onClick}>
      <IconBase
        icon={icon}
        size={size}
        lightColor={lightColor}
        darkColor={darkColor}
      />
    </ButtonGeneric>
  );
}
