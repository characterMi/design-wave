export const metadata = {
  title: "Not found",
};

const NotFound = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <p className="px-5 text-3xl font-black border-r-2 border-[#624cf5]">
        404
      </p>

      <h1 className="px-5 underline">This page could not be found.</h1>
    </main>
  );
};
export default NotFound;
