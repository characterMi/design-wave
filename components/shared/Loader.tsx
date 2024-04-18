import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-10", className)}>
      <div className="loader" />
    </div>
  );
};

export default Loader;
