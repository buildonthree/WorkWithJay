import { Bento } from "@/components/BentoLayouts/bentoHome";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center max-w-5xl mx-auto">
        <div className="flex flex-col items-center overflow-hidden">
          <div className="w-full py-2  px-2 lg:px-4">
            <Bento />
          </div>
        </div>
      </div>
    </>
  );
}
