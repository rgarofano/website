import { ReactNode } from "react";
import { IoMdBriefcase } from "react-icons/io";

type ExperienceCardProps = {
  children: ReactNode;
  icon: string;
  iconLink: string;
  date: string;
  title: string;
};

function ExperienceCard(props: ExperienceCardProps) {
  const { icon, iconLink, date, title, children } = props;

  return (
    <div className="flex items-center gap-4">
      <a href={iconLink} target="_blank" className="flex-shrink-0">
        <img src={icon} className="hidden sm:block size-20 rounded-full" />
      </a>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600 flex items-center gap-2">
          <IoMdBriefcase className="relative -top-0.5" />
          <span>{date}</span>
        </span>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
