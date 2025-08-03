const SmallLoader = ({ label }: { label: string }) => (
  <div
    className="min-w-6 min-h-6 size-6 bg-[conic-gradient(#624cf5,transparent)] animate-spin rounded-full relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-[60%] after:bg-white after:rounded-full"
    aria-label={label}
  />
);

export default SmallLoader;
