import { Icon } from "@/data/types/IIcon";

import Tag from "@/components/tag";
import { text } from "@/data/content/text";
import IconBase from "./icon-base";


export default function Skill() {
  return <section className="flex flex-col justify-center items-center gap-4">
    <Tag>
      Skills
    </Tag>
    <div className="grid grid-cols-3 w-full">
      {
        text.skills.techStack.map((skill) => {
          return (
            <div key={skill.name}>
              <IconBase icon={skill.name as Icon} lightColor={skill.lightColorClasses} darkColor={skill.darkColorClasses} size={24} />
            </div>
          )
        })
      }
    </div>
  </section>;
}
