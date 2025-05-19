import { Suspense } from "react";

import { Calendar, Clock, Rocket, Star, Zap } from "lucide-react";

import data from "../../data.json";
import { Navigation } from "../components/nav";
import { Timeline, TimelineItem } from "../components/timeline";

export default async function About() {
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
            <TimelineItem
              title="Project Started"
              description="Initial project planning and team assembly completed."
              date="January 15, 2023"
              icon={<Calendar className="text-primary h-4 w-4" />}
            />

            <TimelineItem
              title="Design Phase"
              description="UI/UX design mockups and prototypes finalized."
              date="February 28, 2023"
              icon={<Star className="text-primary h-4 w-4" />}
            />

            <TimelineItem
              title="Development Kickoff"
              description="Core development team began implementation of key features."
              date="March 10, 2023"
              icon={<Zap className="text-primary h-4 w-4" />}
            />

            <TimelineItem
              title="Alpha Release"
              description="Internal testing phase initiated with basic functionality."
              date="May 22, 2023"
              icon={<Rocket className="text-primary h-4 w-4" />}
            />

            <TimelineItem
              title="Beta Launch"
              description="Limited public release for feedback and bug reporting."
              date="July 15, 2023"
              icon={<Clock className="text-primary h-4 w-4" />}
            />
          </Timeline>
        </div>
        <h2>Skillset</h2>
      </div>
    </div>
  );
}
