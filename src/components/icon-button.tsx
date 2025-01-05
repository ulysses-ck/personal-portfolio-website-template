import { Icon } from "@/data/types/IIcon";
import IconBase from "./icon-base";
import ButtonGeneric from "./button-generic";

interface IconButtonProps {
  icon: Icon;
  size: 24 | 32;
  lightColor: string;
  darkColor: string;
}

export default function IconButton({
  icon,
  size,
  lightColor,
  darkColor,
}: IconButtonProps) {
  return (
    <ButtonGeneric>
      <IconBase
        icon={icon}
        size={size}
        lightColor={lightColor}
        darkColor={darkColor}
      />
    </ButtonGeneric>
  );
}
