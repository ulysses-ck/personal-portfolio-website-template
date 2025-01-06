import { text } from "@/data/content/text";
import Tag from "./tag";
import LinkBase from "./link-base";

export default function About() {
  return (
    <section className="flex flex-col items-start justify-center gap-4">
      <Tag className="self-center">About me</Tag>
      <h3 className="text-h3-tablet-semibold text-gray-900">
        {text.about.title}
      </h3>
      <p className="text-body2-all-normal text-gray-600">
        I'm a passionate,{" "}
        <LinkBase href="https://www.google.com">
          self-proclaimed designer
        </LinkBase>{" "}
        who specializes in full stack development (React.js & Node.js). I am
        very enthusiastic about bringing the technical and visual aspects of
        digital products to life. User experience, pixel perfect design, and
        writing clear, readable, highly performant code matters to me.
      </p>
      <p className="text-body2-all-normal text-gray-600">
        {text.about.paragraph2}
      </p>
      <p className="text-body2-all-normal text-gray-600">
        {text.about.paragraph3}
      </p>
      <p className="text-body2-all-normal text-gray-600">
        When I'm not in full-on developer mode, you can find me hovering around
        on twitter or on indie hacker, witnessing the journey of early startups
        or enjoying some free time. You can follow me on{" "}
        <LinkBase href={text.social.twitter}>Twitter</LinkBase> where I share
        tech-related bites and build in public, or you can follow me on{" "}
        <LinkBase href={text.social.github}>GitHub</LinkBase>.
      </p>
      <p className="text-body2-all-normal text-gray-600">
        {text.about.paragraph4}
      </p>
      <div className="flex gap-2 justify-between w-full text-body2-all-normal text-gray-600">
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>
            B.E. in Computer Science
          </li>
          <li>
            Full time freelancer
          </li>
        </ul>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>
            Avid learner
          </li>
          <li>
            Aspiring indie hacker
          </li>
        </ul>
      </div>
      <p className="text-body2-all-normal text-gray-600">
        {text.about.paragraph5}
      </p>
    </section>
  );
}
