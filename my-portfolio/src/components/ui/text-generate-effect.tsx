"use client";
import { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "./../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  loopInterval = 3000, // Time in ms for loop
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  loopInterval?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [animateState, setAnimateState] = useState(0); // Used to trigger re-animation
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    const animateWords = () => {
      animate(
        "span",
        {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        },
        { duration: 0 } // Reset opacity to 0 instantly
      );

      // Animate words in
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ?? 1,
          delay: stagger(0.2),
        }
      );
    };

    animateWords(); // Start first animation
    
    const intervalId = setInterval(() => {
      setAnimateState((prev) => prev + 1); // Trigger re-animation
    }, loopInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [animateState, words, filter, duration, loopInterval]); // Dependencies to re-trigger effect

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-white text-black opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
            display: "inline-block",
            marginRight: "0.25rem",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
