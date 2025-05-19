import chunk from "lodash/chunk";

import { Card } from "../components/card";
import { getPinnedRepos, getRepos } from "../data";
// import { UserTimeline } from "../components/timeline";
import { Article } from "./article";

type Project = {
  name: string;
  stargazers_count: number;
  homepage: string;
  html_url: string;
  created_at: string;
  description: string;
  owner: {
    login: string;
  };
};

type Repository = {
  private: boolean;
  fork: boolean;
  archived: boolean;
  name: string;
  updated_at: string;
};

export default async function ProjectsComponent({
  username,
}: {
  username: string;
}) {
  const [repositories, pinnedNames] = await Promise.all([
    getRepos(username),
    getPinnedRepos(username),
  ]);

  // const heroes = repositories.filter((project) => data.projects.heroNames.includes(project.name)).sort((a, b) => b.stargazers_count - a.stargazers_count);
  const heroes = repositories
    .filter((project: Project) => pinnedNames.includes(project.name))
    .sort((a: Project, b: Project) => b.created_at.localeCompare(a.created_at));
  const sorted = repositories
    .filter((p: Repository) => !p.private)
    .filter((p: Repository) => !p.fork)
    .filter((p: Repository) => !p.archived)
    // .filter((p) => p.name !== username)
    .filter((p: Repository) => !pinnedNames.includes(p.name))
    .sort(
      (a: Repository, b: Repository) =>
        new Date(b.updated_at ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.updated_at ?? Number.POSITIVE_INFINITY).getTime()
    );

  const chunkSize = Math.ceil(sorted.length / 3);
  const projectChunks: Project[][] = chunk(sorted, chunkSize);

  return (
    <>
      {heroes.length ? (
        <>
          <div className="h-px w-full bg-zinc-800" />
          <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
            {heroes[0] || heroes[2] ? (
              <div className="grid grid-cols-1 gap-4">
                {[heroes[0], heroes[2]].map((project) =>
                  !project ? null : (
                    <Card key={project.name}>
                      <Article project={project} />
                    </Card>
                  )
                )}
              </div>
            ) : null}
            {heroes[1] || heroes[3] ? (
              <div className="grid grid-cols-1 gap-4">
                {[heroes[1], heroes[3]].map((project) =>
                  !project ? null : (
                    <Card key={project.name}>
                      <Article project={project} />
                    </Card>
                  )
                )}
              </div>
            ) : null}
          </div>
          <div className="hidden h-px w-full bg-zinc-800 md:block" />
        </>
      ) : null}

      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {projectChunks[0].map((project) => (
            <Card key={project.name}>
              <Article project={project} />
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectChunks[1]?.map((project) => (
            <Card key={project.name}>
              <Article project={project} />
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectChunks[2]?.map((project) => (
            <Card key={project.name}>
              <Article project={project} />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
