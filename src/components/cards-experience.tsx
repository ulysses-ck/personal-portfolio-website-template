import { text } from "@/data/content/text";
import CardExperience from "./card-experience";

export default function CardsExperience() {
    return text.experience.experiences.map((experience) => (
        <CardExperience key={experience.dateStart + experience.company + experience.position} {...experience} />
    ));
}