import IconBase from "@/components/icon-base";
import { Icon } from "@/data/types/IIcon";
import LinkBase from "@/components/link-base";

export default function Footer() {
  const year = new Date().getFullYear();
  const designLink = "https://www.linkedin.com/in/sagar-shah-1234567890/";
  const codeLink = "https://github.com/sagarshah1234567890";
  return (
    <footer className="py-6 px-0 text-center">
      <p className="text-body3-all-medium text-gray-900 dark:text-gray-dark-900 flex justify-center items-center gap-2">
        <IconBase
          icon={Icon.Copyright}
          size={16}
          lightColor="black"
          darkColor="white"
        />{" "}
        <span>
          {year} | <LinkBase href={designLink}>Designed</LinkBase> and{" "}
          <LinkBase href={codeLink}>coded</LinkBase> with ❤️ by Sagar Shah
        </span>
      </p>
    </footer>
  );
}
