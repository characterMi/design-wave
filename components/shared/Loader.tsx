import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  color?: "purple" | "white";
};

const Loader = ({ className, color }: Props) => {
  return (
    <div className={cn("w-10", className)}>
      <p className="sr-only">Loading...</p>
      <div className="loader" aria-hidden style={{ background: color }} />
    </div>
  );
};

export default Loader;
