import { getImages } from "@/actions/image.actions";
import { Collection } from "@/components/shared/Collection";
import Loader from "@/components/shared/Loader";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function GetImages({
  pageParam,
  query,
}: {
  pageParam: number | string | string[];
  query: string;
}) {
  const page = Number(pageParam);
  const searchQuery = query;
  const images = await getImages({ page, searchQuery });

  return (
    <Collection
      hasSearch={true}
      images={images?.data}
      totalPages={images?.totalPage}
      page={page}
    />
  );
}

const HomePage = async ({ searchParams }: SearchParamProps) => (
  <>
    <section className="home">
      <h1 className="home-heading">
        Unleash Your Create Vision with DESIGN-WAVE
      </h1>

      <ul className="sm:flex-center w-full hidden gap-20">
        {navLinks.slice(1, 5).map((link) => (
          <Link
            href={link.route}
            className="flex-center flex-col gap-2"
            key={link.route}
          >
            <li className="flex-center w-fit rounded-full bg-white p-4">
              <Image src={link.icon} width={24} height={24} alt={link.label} />
            </li>

            <p className="p-14-medium text-center text-white">{link.label}</p>
          </Link>
        ))}
      </ul>
    </section>

    <section className="mt-6 sm:mt-12">
      <Suspense fallback={<Loader className="m-auto" />}>
        <GetImages
          pageParam={searchParams?.page || 1}
          query={(searchParams?.query as string) || ""}
        />
      </Suspense>
    </section>
  </>
);

export default HomePage;
