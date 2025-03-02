"use client";

import Hero from "../cards/hero";
import ThemeToggle from "../theme-toggle";
import { FadeIn } from "../magicui/fade-in";
import { BentoCard, BentoFeature, BentoGrid } from "../magicui/bento-grid";


const features: BentoFeature[] = [

    // Header section
  {
    Icon: "", // You can add an icon component here if needed
    className: "col-span-3 md:col-span-3 h-20", // Added explicit height
    height: "tiny",
    mobileHeight: "tiny",
    background: (
      <div className="absolute h-full w-full flex items-center justify-center bg-gradient-to-r dark:bg-white bg-black ">
      </div>
    ),
  },
];

  export function Header() {
    return (
      <>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </>
    );
  }