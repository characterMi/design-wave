"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const DownloadAppButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  const handleDownload = () => {
    if (deferredPrompt) {
      // @ts-ignore: There no specific type for "beforeInstallPrompt" event.
      deferredPrompt.prompt();
    } else {
      toast({
        title: "Download the application",
        description: `To install the app look for "Add to Homescreen" or install in your browser's menu.`,
        duration: 5000,
        className: "success-toast",
      });
    }
  };

  useEffect(() => {
    const handleBIP = (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBIP);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBIP);
    };
  }, []);

  return (
    <Button
      className="download-btn button uppercase bg-transparent border-2 text-[#624cf5] hover:bg-transparent border-[#624cf5]"
      onClick={handleDownload}
    >
      Get the App
    </Button>
  );
};

export default DownloadAppButton;
