import Tag from "@/components/tag";
import Subtitle from "./subtitle";
import { text } from "@/data/content/text";
import CardsExperience from "./cards-experience";

export default function Experience() {
  return <section className="flex flex-col justify-center items-center gap-4">
    <Tag>
      Experience
    </Tag>
    <Subtitle>
      {text.experience.description}
    </Subtitle>
    <CardsExperience />
  </section>;
}
