import { JSX, Suspense } from "react";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import data from "../../data.json";
import { Navigation } from "../components/nav";
import { Timeline, TimelineItem } from "../components/timeline";

type IconType = "work" | "school";

type Experience = {
  timeRange: string;
  role: string;
  location: string;
  icon: IconType;
};

const icons: Record<IconType, JSX.Element> = {
  work: <BriefcaseBusiness />,
  school: <GraduationCap />,
};

export default async function About() {
  const experiences: Experience[] = data.experiences as Experience[];
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="mx-auto flex max-w-7xl items-center justify-center space-y-8 px-6 pt-16 md:space-y-12 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto h-[200px] max-w-2xl lg:mx-0">
          <p className="mt-4 text-center text-zinc-400">{data.bio}</p>
        </div>
        <Suspense
          fallback={<div className="text-lg text-zinc-500">Loading...</div>}
        ></Suspense>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-evenly space-y-8 px-6 pt-16 md:flex-row md:space-y-12 md:pt-24 lg:px-8 lg:pt-32">
        <div>
          <h2>Experience</h2>
          <Timeline>
            {experiences.map((e: Experience) => (
              <TimelineItem
                key={e.role}
                title={e.role}
                date={e.timeRange}
                icon={icons[e.icon]}
              />
            ))}
          </Timeline>
        </div>
        <h2>Skillset</h2>
      </div>
    </div>
  );
}
