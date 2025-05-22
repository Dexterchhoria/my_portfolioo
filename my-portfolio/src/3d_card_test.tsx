"use client";
import myImg from './assets/my_image.jpg';
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[24rem] sm:max-w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Find Joy in Every Day
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Discover a simple reason to be happy-right now, right here.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          {/* <img
            src={myImg}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
          <img
  src={myImg}
  className="w-full h-48 sm:h-80 object-cover rounded-xl group-hover/card:shadow-xl"
  alt="thumbnail"
/>

        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as="a"
            href="https://www.linkedin.com/in/siddharthchhoria/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
