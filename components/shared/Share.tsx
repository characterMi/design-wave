"use client";

import { useToast } from "../ui/use-toast";

const Share = ({ title }: { title: string }) => {
  const { toast } = useToast();

  async function handleShare() {
    if (!navigator.share) {
      toast({
        title: "Share not supported",
        description: "Please use a modern browser to share this image",
        duration: 5000,
        className: "error-toast",
      });
      return;
    }

    await navigator.share({
      title: `DesignWave - ${title}`,
      text: "DesignWave - Design-Wave, is a large and captivating platform for editing photos using the power of AI.",
      url: window.location.href,
    });
  }

  return (
    <svg
      stroke="#2b3674"
      fill="#2b3674"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block cursor-pointer size-7 ml-2 -mt-4"
      onClick={handleShare}
    >
      <path d="M376 176H272v145a16 16 0 0 1-32 0V176H136a56.06 56.06 0 0 0-56 56v192a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V232a56.06 56.06 0 0 0-56-56zM272 86.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 86.63V176h32z" />
    </svg>
  );
};

export default Share;
