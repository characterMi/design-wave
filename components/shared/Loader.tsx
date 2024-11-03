import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-10", className)}>
      <p className="absolute opacity-0">Loading...</p>
      <div className="loader" aria-hidden />
    </div>
  );
};

export default Loader;
