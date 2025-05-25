import { ReactNode } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";

type ExperienceCardProps = {
  children?: ReactNode;
  icon: string;
  iconLink: string;
  date: string;
  title: string;
  type: "work" | "education";
  organization: string;
};

function ExperienceCard(props: ExperienceCardProps) {
  const { icon, iconLink, date, title, type, children, organization } = props;

  return (
    <div className="flex items-center gap-4">
      <a href={iconLink} target="_blank" className="flex-shrink-0 hover:scale-105 transition-transform">
        <img src={icon} className="hidden sm:block size-20 rounded-full" />
      </a>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600 flex items-center gap-2">
          {type == "work" ? (
            <IoMdBriefcase className="relative -top-0.5" />
          ) : (
            <FaGraduationCap className="relative -top-0.5" />
          )}
          <span>{date}</span>
        </span>
        <div className="flex flex-col justify-center gap-1">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>
          <h4 className="text-gray-600 font-semibold block sm:hidden">{organization}</h4>
        </div>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
