"use client";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

const words = `Hi, I am Siddharth Chhoria`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} loopInterval={4000} />;
}
