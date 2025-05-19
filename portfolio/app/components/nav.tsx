"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { GoArrowLeft } from "react-icons/go";

import LoadingIndicator from "./loading-indicator";
import { ThemeSwitcher } from "./theme-switcher";

export const Navigation = () => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const searchParams = useSearchParams();
  const customUsername = searchParams.get("customUsername");

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 ${
          isIntersecting
            ? "border-transparent bg-zinc-900/0"
            : "border-zinc-800 bg-zinc-900/500"
        }`}
      >
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8 text-base">
            <Link
              href={
                "/projects" +
                (customUsername ? `?customUsername=${customUsername}` : "")
              }
              className="relative block text-zinc-400 duration-200 hover:text-zinc-100"
            >
              <span className="inline-flex items-center">
                Projects <LoadingIndicator />
              </span>
            </Link>
            <Link
              href={
                "/contact" +
                (customUsername ? `?customUsername=${customUsername}` : "")
              }
              className="relative block text-zinc-400 duration-200 hover:text-zinc-100"
            >
              <span className="inline-flex items-center">
                Contact <LoadingIndicator />
              </span>
            </Link>
          </div>

          <Link
            href={
              "/" + (customUsername ? `?customUsername=${customUsername}` : "")
            }
            className="text-zinc-300 duration-200 hover:text-zinc-100"
          >
            <GoArrowLeft className="h-6 w-6" />
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
