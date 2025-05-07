import { FC } from "react";
import { Experience } from "@/types";

interface Props {
  experience: Experience;
}

const ExperienceCard: FC<Props> = ({ experience }) => {
  return (
    <div className="py-4">
      <p className="text-muted-foreground flex items-center justify-end text-xs">
        {experience.from} — {experience.to || "Present"}
      </p>
      <div className="mb-1 flex flex-col items-start justify-between gap-2 text-lg text-balance sm:flex-row sm:items-center">
        <p className="font-medium">
          {experience.title} <span className="text-muted-foreground">at</span>{" "}
          {experience.company}
        </p>
      </div>
      <p className="text-muted-foreground flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base">
        {experience.description}
      </p>
    </div>
  );
};

export default ExperienceCard;
