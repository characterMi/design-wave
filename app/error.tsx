"use client";

import { Button } from "@/components/ui/button";

const HomePageError = ({ err, reset }: { err: string; reset: () => void }) => {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-4 justify-center items-center fixed top-0 left-0 z-[10000] bg-white/55 backdrop-blur-sm">
      <h1 className="text-2xl font-thin text-dark-400 text-center">
        {err || "Something went wrong !"}
      </h1>
      <div className="flex gap-x-4 items-center">
        <Button className="w-28" onClick={reset}>
          Try again
        </Button>

        <Button className="w-28" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
    </div>
  );
};
export default HomePageError;
