import Ripple from "@/components/magicui/ripple";

export function RippleCard() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-blue-500 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white p-5">
        bring your ideas to life.
      </p>
      <Ripple />
    </div>
  );
}
