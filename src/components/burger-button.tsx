import { Icon } from "@/data/types/IIcon";
import IconButton from "./icon-button";

export default function BurgerButton({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <IconButton icon={Icon.Menu} size={24} lightColor="black" darkColor="white" onClick={handleClick} />
  );
}
