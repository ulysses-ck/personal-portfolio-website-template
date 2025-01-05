"use client";

import { Icon } from "@/data/types/IIcon";
import IconButton from "./icon-button";
import Navbar from "./navbar";
import ToggleTheme from "./toggle-theme";
import DownloadCV from "./download-cv";
import { cn } from "@/lib/utils";

export default function ModalNavbar({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-gray/10 flex justify-end backdrop-blur-sm">
      <div className="bg-gray dark:bg-gray-dark drop-shadow-2xl h-full w-10/12">
        <NavbarSection>
          <h2 className="text-h3-desktop-semibold text-gray-900 dark:text-gray-dark-900">
            &lt;SS /&gt;
          </h2>
          <IconButton
            icon={Icon.Close}
            size={24}
            lightColor="black"
            darkColor="white"
            onClick={handleClose}
          />
        </NavbarSection>
        <NavbarSection>
          <Navbar className="flex-col gap-4 items-start justify-center" />
        </NavbarSection>
        <NavbarSection className="flex-col gap-4 items-start justify-center">
          <div className="flex justify-between items-center w-full">
            <span className="text-body3-all-medium text-gray-900 dark:text-gray-dark-900">
              Switch Theme
            </span>
            <ToggleTheme />
          </div>
          <DownloadCV />
        </NavbarSection>
      </div>
    </div>
  );
}

function NavbarSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-between items-center border-b border-gray-100 dark:border-gray-dark-100 p-4", className)}>
      {children}
    </div>
  );
}
