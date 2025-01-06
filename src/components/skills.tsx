import Tag from "@/components/tag";
import { text } from "@/data/content/text";
import IconBase from "./icon-base";


export default function Skill() {
  return <section className="flex flex-col justify-center items-center gap-6">
    <Tag>
      Skills
    </Tag>
    <div className="grid grid-cols-3 w-full gap-8">
      {
        text.skills.techStack.map((skill) => {
          return (
            <div key={skill.name} className="flex flex-col items-center justify-center">
              <IconBase icon={skill.name} lightColor={skill.lightColorClasses} darkColor={skill.darkColorClasses} size={32} />
            </div>
          )
        })
      }
    </div>
  </section>;
}
