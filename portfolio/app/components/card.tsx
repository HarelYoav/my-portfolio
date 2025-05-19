import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-600 duration-700 hover:border-zinc-400/50 hover:bg-zinc-800/10 md:gap-8">
      {children}
    </div>
  );
};
