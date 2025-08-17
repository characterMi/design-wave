"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import DownloadAppButton from "./DownloadAppButton";
import Loader from "./Loader";

const LandingPageButtons = () => {
  const [isFeedPageLoading, setIsFeedPageLoading] = useState(false);

  useEffect(() => {
    setIsFeedPageLoading(false);
    return () => {
      setIsFeedPageLoading(false);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center gap-4 mt-12 flex-wrap">
      <Button asChild className="button bg-purple-gradient bg-cover">
        <Link
          href="/feed"
          className="!font-thin"
          onClick={() => setIsFeedPageLoading(true)}
        >
          {isFeedPageLoading ? (
            <Loader className="w-6 h-6" color="white" />
          ) : (
            "Get Started"
          )}
        </Link>
      </Button>

      <DownloadAppButton />
    </div>
  );
};

export default LandingPageButtons;
