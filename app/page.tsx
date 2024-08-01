import DownloadAppButton from "@/components/shared/DownloadAppButton";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DesignWave | Home page",
  description: "AI-Powered image generator",
};

const HomePage = () => {
  return (
    <main className="bg-home bg-cover bg-no-repeat w-screen h-screen flex flex-col">
      <header className="w-full py-6 px-4">
        <nav className="w-full max-w-7xl m-auto h-full flex items-center justify-between">
          <Image
            src="/assets/images/logo-text.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-48 h-auto"
          />

          <div className="items-center gap-x-4 hidden smart-watch:flex">
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </div>
        </nav>
      </header>

      <section className="flex-1 flex flex-col justify-center items-center max-w-5xl m-auto px-2 my-6">
        <h1 className="leading-relaxed xss:leading-snug text-4xl smart-watch:text-[40px] xss:text-5xl sm:text-5xl lg:text-6xl font-bold text-center">
          Design wave is where{" "}
          <span className="text-purple-gradient">
            creativity <br className="hidden mdl:block" /> flows seamlessly
          </span>
        </h1>

        <p className="text-xs sm:text-sm lg:text-base font-medium mt-6 text-center">
          Design-Wave, is a large and captivating platform for editing photos
          using the power of AI. The editing capabilities of this application
          include Restore Image, Background Remove, Generative Fill, Object
          Remove, and Object Recolor.
        </p>

        <div className="w-full flex items-center justify-center gap-4 mt-12 flex-wrap">
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/feed">Get started</Link>
          </Button>

          <DownloadAppButton />
        </div>
      </section>

      <footer className="px-4 py-10 sm:px-10 w-full border-t border-gray-100">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              href={link.route}
              className="flex-center flex-col gap-2"
              key={link.route}
            >
              <p className="text-md xss:text-lg sm:text-xl font-bold text-nowrap">
                {link.label}
              </p>

              <p className="p-14-medium !text-xs sm:!text-sm text-center font-thin opacity-75 line-clamp-2">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
