"use client";

import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import { FadeIn } from "@/components/magicui/fade-in";
import { Mail } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";
import { Button } from "@/components/ui/moving-border";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-r bg-black">
      <div className="flex flex-col items-start justify-center h-full overflow-hidden p-6 z-50">
        <WordPullUp words="Ecommerce Specialist" />

        <div className="text-lg text-white lg:px-1 w-full mt-6">
          <BlurIn className="w-3/4 sm:w-2/3">
          Building brands that scale beyond boundaries
          </BlurIn>

          <FadeIn direction="down" className="my-class">
            <div className="flex items-center gap-2 w-full lg:w-1/3 mt-6">
              <a
                href="mailto:engage_intellect@protonmail.com"
                target="_blank"
                className="w-full"
              >
                <Button
                  borderRadius="2rem"
                  variant="default"
                  size="lg"
                  className="flex items-center gap-2 w-full group/Mail"
                >
                  <div>Email Me</div>
                  <Mail className="h-5 w-5 lg:group-hover/Mail:translate-x-1 transition-all duration-300" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
      <MeteorShower />
    </div>
  );
}
