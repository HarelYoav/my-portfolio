import type * as React from "react";

import { cn } from "../lib/uitls";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Timeline({ children, className, ...props }: TimelineProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
}

export function TimelineItem({
  title,
  description,
  date,
  icon,
  className,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn("relative h-28 pb-8 pl-10 last:pb-0 hover:mb-5", className)}
      {...props}
    >
      {/* Vertical line - stops at the center of each icon */}
      {/* This creates the line ABOVE the icon */}
      <div className="absolute top-0 left-[15px] h-8 w-[2px] -translate-x-1/2 transform bg-slate-200" />

      {/* Icon */}
      <div className="absolute top-10 left-[15px] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2">
        {icon || <div className="bg-primary h-2 w-2 rounded-full" />}
      </div>

      {/* This creates the line BELOW the icon */}
      <div className="hover:top-bottom-0 absolute top-22 left-[15px] h-8 w-[2px] -translate-x-1/2 transform bg-slate-200" />

      {/* Content */}
      <div className="ml-5 w-full space-y-1 pt-9">
        <div className="flex flex-col justify-between">
          <h3 className="leading-none font-medium">
            {title} - {description && description}
          </h3>
          {date && (
            <div className="text-muted-foreground text-xs dark:text-zinc-400">
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
