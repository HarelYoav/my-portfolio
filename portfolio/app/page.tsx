import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import data from "../data.json";
import LoadingIndicator from "./components/loading-indicator";
import { ProfileOrganizations } from "./components/orgs";
// import { RecentActivity } from "./components/recent-activity";
import { ThemeSwitcher } from "./components/theme-switcher";
import { getUser } from "./data";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/projects" },
];

export default async function Home() {
  return <LandingComponent />;
}

type GitHubUser = {
  name: string;
  bio: string;
  avatar_url: string;
};

const UserIcon = async ({ promise }: { promise: Promise<GitHubUser> }) => {
  const user = await promise;
  console.log(user);

  return (
    <Image
      alt="👨‍💻"
      width={100}
      height={100}
      src={user.avatar_url || data.avatarUrl}
      className="float-right mx-4 rounded-full"
    />
  );
};

const UserText = async ({ promise }: { promise: Promise<GitHubUser> }) => {
  const user = await promise;

  return (
    <p>
      Hi, my name is {user.name || data.displayName}
      {". "}
      {user.bio}
    </p>
  );
};

const LandingComponent = async () => {
  const username = process.env.GITHUB_USERNAME || data.githubUsername;
  const promise = getUser(username);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center overflow-y-auto bg-linear-to-tl from-black via-zinc-600/20 to-black">
      <nav className="animate-fade-in my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-zinc-700 duration-500 hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              <span className="inline-flex items-center">
                {item.name} <LoadingIndicator />
              </span>
            </Link>
          ))}
          <ThemeSwitcher />
        </ul>
      </nav>
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />

      <h1 className="text-edge-outline animate-title font-display z-10 flex cursor-default items-center bg-zinc-950 bg-clip-text p-5 text-4xl whitespace-nowrap text-transparent duration-1000 hover:scale-110 sm:text-6xl md:text-9xl dark:bg-white">
        {username}
        <Suspense fallback={<p>Loading...</p>}>
          <UserIcon promise={promise} />
        </Suspense>
      </h1>

      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="animate-fade-in my-16 text-center">
        <h2 className="text-lg text-zinc-500">
          <Suspense
            fallback={<div className="h-px min-h-28 w-full">Loading...</div>}
          >
            <div className="h-px min-h-28 w-full">
              <UserText promise={promise} />
              <ProfileOrganizations username={username} />
              {/* <RecentActivity username={username} /> */}
            </div>
          </Suspense>
        </h2>
      </div>
    </div>
  );
};
