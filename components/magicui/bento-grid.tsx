import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import BlurIn from "@/components/magicui/blur-in";

// Add ModalContent type
export type ModalContent = {
  title: string;
  description: string;
  image?: string;
  content?: ReactNode;
};

// Add BentoFeature type
export type BentoFeature = {
  Icon?: any;
  name?: string;
  description?: string;
  href?: string;
  cta?: string;
  className?: string;
  height?: string;
  mobileHeight?: string;
  background?: ReactNode;
  modalContent?: ModalContent;
};

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full gap-2 lg:gap-3",
        // Mobile: 1 or 2 columns
        "grid-cols-1 sm:grid-cols-2",
        // Desktop: 3 columns
        "lg:grid-cols-3",
        // Auto rows size
        "auto-rows-[11rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  height = "default",
  mobileHeight = "default",
  onClick,
  modalContent,
}: BentoFeature & {
  onClick?: () => void;
}) => (
  <div 
    onClick={onClick}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      onClick && "cursor-pointer",
      // Desktop height variations (lg and up)
      height === "default" && "lg:row-span-2",
      height === "tall" && "lg:row-span-3",
      height === "short" && "lg:row-span-1",
      height === "tiny" && "lg:row-span-[0.5]",
      
      // Mobile height variations
      mobileHeight === "default" && "row-span-2",
      mobileHeight === "tall" && "row-span-3",
      mobileHeight === "short" && "row-span-1",
      mobileHeight === "tiny" && "row-span-[0.5]",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
  >
    <BlurIn
      duration={0.1}
      key={name}
      className="h-full flex flex-col justify-between"
    >
      <div className="absolute inset-0">{background}</div>
      <div className="relative z-10 mt-auto flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <div className="flex flex-col gap-2">
          <div>
            {Icon !== "" ? (
              <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            ) : (
              ""
            )}
          </div>

          <div className="text-3xl font-semibold text-neutral-700 dark:text-neutral-300">
            {name}
          </div>
        </div>
        <p className="w-full text-neutral-500 dark:text-neutral-400 dark:drop-shadow">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {href !== "" ? (
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto group/Arrow"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4 lg:group-hover/Arrow:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </BlurIn>
  </div>
);

export { BentoCard, BentoGrid };