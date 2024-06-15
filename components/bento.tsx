"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import BlurIn from "@/components/magicui/blur-in";
import { FadeIn } from "@/components/magicui/fade-in";
import NumberTicker from "@/components/magicui/number-ticker";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Globe from "@/components/magicui/globe";
import Marquee from "@/components/magicui/marquee";
import Technologies from "@/components/technologies";
import ProjectShowcaseVertical from "@/components/project-showcase-vertical";
import Hero from "@/components/hero";
import Orbit from "@/components/orbit";
import ThemeToggle from "@/components/theme-toggle";
import { EmailForm } from "@/components/email-form";
import { AnimatedBeamMultipleOutputs } from "@/components/animated-beam-multiple-outputs";
import { cn } from "@/lib/utils";
import { formatTagString } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";

const fetchStars = async (): Promise<number> => {
  const baseUrl =
    typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/fetch-github-stars`);
  const data = await res.json();
  return Number(data?.totalStars);
};

const fetchProjects = async () => {
  const baseUrl =
    typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/fetch-project-posts`);
  const data = await res.json();
  return data;
};

const defaultFiles = [
  {
    name: "Crypto",
    body: "Interface with blockchains, create smart contracts, track market data, manage digital assets.",
    slug: "crypto",
  },
  {
    name: "Commerce",
    body: "Sell your product or service online.",
    slug: "commerce",
  },
  {
    name: "Web",
    body: "Create beautiful, responsive, and performant websites.",
    slug: "web",
  },
  {
    name: "IOT",
    body: "Interface with things around you.",
    slug: "iot",
  },
  {
    name: "AI",
    body: "Create intelligent, context-aware applications that understand your unique data.",
    slug: "ai",
  },
  {
    name: "API",
    body: "Create APIs that power your applications.",
    slug: "api",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const GitHubStars = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const getStars = async () => {
      const totalStars = await fetchStars();
      setStars(totalStars);
    };

    getStars();
  }, []);

  if (stars === null) {
    return <div>0</div>;
  }

  return <NumberTicker value={stars} />;
};

const ProjectPosts = () => {
  const [posts, setPosts] = useState<any | null>(null);
  const [files, setFiles] = useState(defaultFiles);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchProjects();
      if (postsData) {
        console.log("postsData", postsData.postsData);
        const formattedPosts = postsData.postsData.map((post: any) => ({
          name: post.data.title,
          body: post.data.description,
          slug: post.slug,
        }));
        console.log("formatted", formattedPosts);
        setFiles(formattedPosts.slice(0, 10));
      }
      setPosts(postsData);
    };

    getPosts();
  }, []);

  return <ProjectShowcaseVertical projects={files} />;
};

const features = [
  {
    Icon: "",
    name: "",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <div
          id="hero"
          className="absolute right-0 top-0 h-full w-full border-none transition-all duration-300 ease-out"
        >
          <Hero />
        </div>

        <div className="absolute right-0 top-0 z-50">
          <FadeIn direction="down">
            <ThemeToggle />
          </FadeIn>
        </div>
      </>
    ),
  },
  {
    Icon: "",
    name: "I'm Josh",
    description:
      "software engineer & open-source contributor focused in gen-ai, web, linux servers, pentesting, and finance.",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`,
    cta: "Visit portfolio",
    background: (
      <div>
        <div className="absolute right-0 top-0 h-3/4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)] group-hover:scale-105">
          <BlurIn duration={0.5} className="h-full">
            <Image
              className="object-cover object-center h-full w-full"
              src={
                process.env.AVATAR_URL ||
                "https://github.com/engageintellect.png"
              }
              alt="avatar image"
              width={200}
              height={200}
              priority
              quality={75} // Adjust quality for optimization
              placeholder="blur" // Placeholder to improve perceived performance
              blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
            />
          </BlurIn>
        </div>

        {process.env.NEXT_PUBLIC_AVAILABLE_FOR_FREELANCE == "true" ? (
          <FadeIn
            direction="right"
            framerProps={{
              show: { transition: { delay: 1.5 } },
            }}
          >
            <a
              href={`${process.env.NEXT_PUBLIC_DISCORD}`}
              className="absolute top-2 right-2 bg-background rounded-lg px-4 py-2 text-xs text-neutral-500 dark:text-neutral-300 max-w-3/4 w-fit"
            >
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse"></div>
                <div className="">available</div>
              </div>
            </a>
          </FadeIn>
        ) : (
          ""
        )}
      </div>
    ),
  },

  {
    Icon: "",
    name: "Tech Domain",
    description: "AI, Web, Commerce, Finance.",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/projects`,
    cta: "View projects",
    className: "col-span-3 md:col-span-1",
    background: (
      <Marquee
        className="absolute h-2/3 top-10 [--duration:40s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] w-full"
        pauseOnHover
      >
        {defaultFiles.map((f, idx) => (
          <a
            href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/${f.slug}`}
            key={idx}
            className={cn(
              "relative w-40 h-full cursor-pointer overflow-hidden rounded-xl border p-4 bg-red-500",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-bold dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </a>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: "",
    name: "Technologies",
    description:
      "Using a combination of cutting-edge, and time-tested technologies.",
    href: "/technologies",
    cta: "View all technologies",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute right-0 top-0 w-[80%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] md:[mask-image:linear-gradient(to_top,transparent_50%,#000_70%)] group-hover:-translate-y-5 group-hover:scale-105">
        <FadeIn direction="up">
          <Technologies />
        </FadeIn>
      </div>
    ),
  },
  {
    Icon: "",
    name: "AI Integrations",
    description: "Generative UIs, LLMs, Transformers, and more.",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/ai`,
    cta: "Visit AI projects",
    className: "col-span-3 md:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputs className="absolute right-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] md:[mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: "",
    name: "Seamless Deployments",
    description: "Push, build, deploy.",
    className: "col-span-3 md:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_25%,#000_70%)] group-hover:scale-105">
        <Orbit />
      </div>
    ),
  },

  {
    Icon: "",
    name: "Worldwide Reach",
    description:
      "Deploy your projects to any region in the world. on-prem, or in the cloud.",
    className: "col-span-3 md:col-span-3",
    href: "/",
    cta: "Learn more",
    background: (
      <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110 group-hover:-translate-y-4" />
    ),
  },

  {
    Icon: "",
    name: "GitHub Stars",
    description: "Star this repository to show your support.",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.GITHUB_URL}/${process.env.REPO_NAME}`,
    cta: "Star repository",
    background: (
      // <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110 group-hover:-translate-y-4" />

      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] group-hover:scale-110 group-hover:-translate-y-4">
        <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 group-hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-2">
            <GitHubStars />
            <Image
              src="/images/githubstar.webp"
              alt="GitHub logo"
              className="h-14 w-14"
              width={56}
              height={56}
              priority
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Project Showcase",
    description:
      "Here are a few recent projects, using the technologies mentioned above.",
    className: "col-span-3 md:col-span-2",
    href: `${process.env.PUBLIC_PORTFOLIO_URL}/projects`,
    cta: "All projects",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[102%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 transition-all duration-300">
              <div className="flex items-center gap-2">
                <ProjectPosts />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-3",
    href: "",
    cta: "",
    background: (
      // <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110 group-hover:-translate-y-4" />

      <div
        id="contact-form"
        className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)]"
      >
        <div className="absolute inset-0 z-50 flex justify-center items-center gap-5 p-5">
          <div className="max-w-sm w-full flex flex-col gap-2">
            <div className="text-5xl md:text-6xl font-semibold text-neutral-700 dark:text-neutral-300 w-full flex justify-start">
              <BlurIn duration={0.5} className="h-full">
                Get in touch.
              </BlurIn>
            </div>
            <div className="w-full flex justify-center text-neutral-500 dark:text-neutral-400">
              Leave your email to get the conversation started. We&apos;ll be in
              touch soon. Your email will never be shared with anyone.
            </div>
            <div className="mt-3">
              <EmailForm />
            </div>
          </div>
        </div>

        <RetroGrid />
      </div>
    ),
  },
];

export function Bento() {
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
