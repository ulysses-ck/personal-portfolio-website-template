import MobileNavbar from "./mobile-navbar";
import Navbar from "./navbar";
import ToggleTheme from "./toggle-theme";
import DownloadCV from "./download-cv";

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-dark-100 flex justify-between items-center p-4 desktop:px-20">
      <h3 className="text-h3-desktop-semibold">&lt;SS /&gt;</h3>
      <div className="flex items-center gap-2 mobile:hidden">
        <Navbar />
        <ToggleTheme />
        <DownloadCV />
      </div>
      <div className="mobile:block hidden">
        <MobileNavbar />
      </div>
    </header>
  );
}
