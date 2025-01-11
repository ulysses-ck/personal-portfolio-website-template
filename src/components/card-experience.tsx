import { formatDate, validateStringToDate } from "@/lib/formatDate";
import Card from "./card";
import Image from "next/image";

interface ICardExperienceProps {
    dateStart: string;
    dateEnd: string;
    company: string;
    logo: string;
    position: string;
    labors: string[];
}

export default function CardExperience({ dateStart, dateEnd, company, logo, position, labors }: Readonly<ICardExperienceProps>) {
    const dateStartFormatted = validateStringToDate(dateStart) ? formatDate(dateStart) : dateStart;
    const dateEndFormatted = validateStringToDate(dateEnd) ? formatDate(dateEnd) : dateEnd;
    return <Card className="flex flex-col gap-2">
        <div className="h-16 w-auto self-start">
            <Image src={logo} alt={company} width={500} height={500} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-body2-all-normal text-gray-700">
                {dateStartFormatted} - {dateEndFormatted}
            </p>
            <h4 className="text-subtitle-tablet-mobile-semibold text-gray-900">
                {position}
            </h4>
        </div>
        <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-2 list-disc list-inside">
                <Labors labors={labors} />
            </ul>
        </div>
    </Card>;
}

function Labors({ labors }: Readonly<{ labors: string[] }>) {
    return labors.map((labor, index) => (
        <li key={index} className="text-body-tablet-mobile-regular text-gray-900">
            {labor}
        </li>
    ))
}
