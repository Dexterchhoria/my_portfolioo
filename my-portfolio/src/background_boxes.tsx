"use client";
import React from "react";
import { Boxes } from "./components/ui/background-boxes";
import { cn } from "./lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden dark:bg-black flex flex-col items-center justify-center rounded-lg dark:border-white/[0.2] border-black/[0.1]">
      <div className=" inset-0 w-full h-full  bg-[#18181b]/60 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <h2 className="mb-4 text-lg font-semibold">
      A <span className="text-blue-400">Software Developer</span> who creates seamless, scalable, and visually stunning web and mobile applications.
    </h2>
    <p className="text-gray-400">
      With expertise in{' '}
      <span className="rounded-md bg-black-200 px-2 py-1 text-green-400">
        React.js
      </span>
      ,{' '}
      <span className="rounded-md bg-black-200 px-2 py-1 text-green-400">
        Next.js
      </span>
      ,{' '}
      <span className="rounded-md bg-black-200 px-2 py-1 text-green-400">
        Node.js
      </span>{' '}
      and alot{' '}
      <span className="text-purple-400">more</span>, I blend functionality with aesthetics to deliver impactful solutions. Known for my creative{' '}
      <span className="underline">problem-solving</span>, I bridge the gap between frontend and backend with precision, ensuring every detail contributes to an
      exceptional user experience, who crafts seamless, scalable web and mobile applications.
    </p>

    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 py-7">
      <div className="rounded-lg bg-[#18190b] p-4">
        <h3 className="mb-2 text-sm font-semibold">Skills</h3>
        <p className="text-sm text-gray-400">&gt; Building responsive UIs with React, Next.js, and React Native.</p>
      </div>

      <div className="rounded-lg bg-[#18190b] p-4">
        <h3 className="mb-2 text-sm font-semibold">Hobbies <span aria-hidden="true"> 🪂 </span></h3>
        <p className="text-sm text-gray-400">Playing Chess and like to Talk to people</p>
      </div>

      <div className="rounded-lg bg-[#18190b] p-4">
        <h3 className="mb-2 text-sm font-semibold">Goal <span aria-hidden="true"> 🧯 </span></h3>
        <p className="text-sm text-gray-400">Let's team up and create something amazing together. 🚀</p>
      </div>
    </div>

    <section className="mt-6 text-sm text-gray-400">
      <p>
        P.S. I'm not really <span className="text-yellow-500">Batman</span>, but I might be the <span className="text-orange-500">hero</span> your project needs! 👨‍💻
      </p>
      </section>
    </div>
  );
}
