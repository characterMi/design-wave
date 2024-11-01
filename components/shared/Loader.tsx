import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-10", className)} aria-label="Loading...">
      <div className="loader" aria-hidden />
    </div>
  );
};

export default Loader;
