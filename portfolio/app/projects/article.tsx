import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { GoDependabot, GoEye, GoEyeClosed, GoStar } from "react-icons/go";

import { getDependabotAlerts, getTrafficPageViews } from "../data";

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

export const Article = async ({ project }: { project: Project }) => {
  const appLink = project.homepage ? project.homepage : project.html_url;

  /** Repository visitors info. */
  let views = (
    <span
      title="Can't get traffic data for someone else's repo."
      className="flex items-center gap-1"
    >
      <GoEyeClosed className="h-4 w-4" />
    </span>
  );
  let alerts = (
    <span title="Can't get alerts data for someone else's repo.">
      <GoDependabot className="h-4 w-4" />
    </span>
  );

  const [{ todayUniques, sumUniques } = {}, openAlertsBySeverity] =
    await Promise.all([
      getTrafficPageViews(project.owner.login, project.name),
      getDependabotAlerts(project.owner.login, project.name),
    ]);
  views = (
    <span
      title="Unique repository visitors: Last 14 days / Today."
      className="flex items-center gap-1"
    >
      <GoEye className="h-4 w-4" />{" "}
      {Intl.NumberFormat("en-US", { notation: "compact" }).format(sumUniques)}/
      {Intl.NumberFormat("en-US", { notation: "compact" }).format(todayUniques)}
    </span>
  );
  const alertColor =
    openAlertsBySeverity.critical > 0
      ? "red"
      : openAlertsBySeverity.high > 0
        ? "orange"
        : openAlertsBySeverity.medium > 0
          ? "yellow"
          : openAlertsBySeverity.low > 0
            ? "blue"
            : "gray";
  const alertCountTotal =
    (openAlertsBySeverity.critical || 0) +
    (openAlertsBySeverity.high || 0) +
    (openAlertsBySeverity.medium || 0) +
    (openAlertsBySeverity.low || 0);
  const alertTitle =
    alertCountTotal > 0
      ? `Open Dependabot alerts: ` + JSON.stringify(openAlertsBySeverity)
      : "No open Dependabot alerts.";
  alerts = (
    <span title={alertTitle} className="flex items-center gap-1">
      <GoDependabot className="danger h-4 w-4" fill={alertColor} />{" "}
      {Intl.NumberFormat("en-US", { notation: "compact" }).format(
        alertCountTotal
      )}
    </span>
  );

  return (
    <article className="p-4 md:p-8">
      <div className="flex items-center justify-between gap-2">
        <span className="drop-shadow-orange text-xs text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:text-white">
          {/* <Image src={`https://raw.githubusercontent.com/jirihofman/${project.name}/${project.default_branch}/public/favicon.ico`} alt={project.name} width={24} height={24} placeholder="blur-sm" /> */}
          <time
            dateTime={new Date(project.created_at).toISOString()}
            title="Created"
          >
            {new Date(project.created_at).toISOString().substring(0, 10)}
          </time>
        </span>
        <span className="flex items-center gap-1 text-xs text-zinc-500">
          {/* <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(project.watchers_count)} */}
          <span title="Total stars." className="flex items-center gap-1">
            {/* <StarIcon className="w-4 h-4" />{" "} */}
            <GoStar className="h-4 w-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              project.stargazers_count
            )}
          </span>
        </span>
      </div>

      <Link href={appLink}>
        <h2
          className="font-display z-20 cursor-pointer text-xl font-medium text-zinc-200 duration-1000 group-hover:text-white lg:text-3xl"
          title={`Click to view the ${project.homepage ? "app" : "repo"}.`}
        >
          <span className="bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500">
            {project.name}
          </span>
        </h2>
      </Link>
      <div className="z-20 mt-4 text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
        {project.description}
      </div>
      <div className="border-opacity-50 float-left mt-2 flex items-center justify-between gap-2 border-t-2 border-gray-700">
        <span className="flex items-center gap-1 text-xs text-zinc-500">
          {views} {alerts}
        </span>
      </div>
      <div className="border-opacity-50 float-right mt-2 flex items-center justify-between gap-2 border-t-2 border-gray-700">
        <span
          className="flex items-center gap-1 align-middle text-xs text-zinc-500"
          title="GitHub repository link."
        >
          <FaGithub className="h-4 w-4" />
          <Link href={project.html_url} className="hover:text-blue-800">
            {project.name}
          </Link>
        </span>
      </div>
    </article>
  );
};
