"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

interface RelatedApp {
  platform: "webapp";
  url: string;
  id?: string;
}

interface NavigatorWithRelatedApps extends Navigator {
  getInstalledRelatedApps: () => Promise<RelatedApp[]>;
}

const DownloadAppButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

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
    const checkInstallationStatus = async () => {
      const nav = navigator as NavigatorWithRelatedApps;

      if (nav.getInstalledRelatedApps) {
        const relatedApps = await nav.getInstalledRelatedApps();
        const isInstalled = relatedApps.some(
          (app) => app.platform === "webapp"
        );

        if (isInstalled) setIsAppInstalled(true);
      }
    };

    checkInstallationStatus();

    const handleAppInstalled = () => {
      setIsAppInstalled(true);
      setDeferredPrompt(null);
    };

    const handleBIP = (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBIP);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBIP);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  return (
    <Button
      className="download-btn button !mt-0 uppercase bg-transparent border-2 text-[#624cf5] border-[#624cf5] disabled:cursor-not-allowed disabled:opacity-50"
      onClick={handleDownload}
      disabled={isAppInstalled}
    >
      Get the App
    </Button>
  );
};

export default DownloadAppButton;
