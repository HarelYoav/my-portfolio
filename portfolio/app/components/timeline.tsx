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
    <div className={cn("relative pb-8 pl-10 last:pb-0", className)} {...props}>
      {/* Vertical line - stops at the center of each icon */}
      {/* This creates the line ABOVE the icon */}
      <div className="absolute top-0 left-[15px] h-4 w-[2px] -translate-x-1/2 transform bg-slate-200" />

      {/* This creates the line BELOW the icon */}
      <div className="absolute top-12 bottom-0 left-[15px] w-[2px] -translate-x-1/2 transform bg-slate-200" />

      {/* Icon */}
      <div className="absolute top-4 left-[15px] flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2">
        {icon || <div className="bg-primary h-2 w-2 rounded-full" />}
      </div>

      {/* Content */}
      <div className="w-full space-y-1 pt-1">
        <div className="flex items-center justify-between">
          <h3 className="leading-none font-medium">{title}</h3>
          {date && <div className="text-muted-foreground text-xs">{date}</div>}
        </div>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}
