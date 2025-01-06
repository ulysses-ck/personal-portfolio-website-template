import ImageWrapper from "@/components/image-wrapper";
import { text } from "@/data/content/text";
import IconBase from "./icon-base";
import { Icon } from "@/data/types/IIcon";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <ImageWrapper src="/images/hero.jpg" alt="Hero" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-h1-mobile-semibold">{text.hero.title}</h1>
        <p className="text-body2-all-normal">{text.hero.description}</p>
      </div>
      <div className="flex flex-col self-start justify-center">
        <p className="text-body2-all-normal flex items-center gap-2">
          <IconBase
            icon={Icon.Location}
            lightColor="#000"
            darkColor="#fff"
            size={16}
          />
          <span>{text.hero.location}</span>
        </p>
        <p className="text-body2-all-normal flex items-center gap-2">
          <span className="rounded-full w-2 h-2 bg-emerald-500"></span>
          <span>{text.hero.available}</span>
        </p>
      </div>
    </section>
  );
}
