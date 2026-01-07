"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";        // ✅ import Next.js Link
import { cn } from "@/lib/utils";

const blog = [
  { id: 1, title: "AI & Machine Learning", image: "🤖", description: "Exploring intelligent systems and predictive models." },
  { id: 2, title: "Python Development", image: "🐍", description: "Building versatile apps with Python’s rich ecosystem." },
  { id: 3, title: "JavaScript Essentials", image: "✨", description: "Core concepts for dynamic web programming." },
  // ... keep the rest
];

export default function Blog() {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty("--animation-direction", "forwards");
      containerRef.current.style.setProperty("--animation-duration", "60s");

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          "hover:[animation-play-state:paused]"
        )}
      >
        {blog.map((item) => (
          <li key={item.id} className="shrink-0">
            {/* ✅ Wrap card in Link */}
            <Link
              href={`/blog/${item.id}`} // route goes to /blog/[id]
              className="block relative w-[350px] max-w-full rounded-2xl border border-b-0 border-zinc-200
                         bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-4 py-4 md:w-[450px]
                         dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]
                         hover:scale-105 transition-transform"
            >
              <blockquote className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{item.image}</div>
                <span className="text-lg font-semibold text-neutral-800 dark:text-gray-100">
                  {item.title}
                </span>
                <span className="text-sm text-neutral-500 dark:text-gray-400 mt-2">
                  {item.description}
                </span>
              </blockquote>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
