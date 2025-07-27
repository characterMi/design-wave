import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

import { getImageById } from "@/actions/image.actions";
import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import Header from "@/components/shared/Header";
import TransformedImage from "@/components/shared/TransformedImage";
import { Button } from "@/components/ui/button";
import { transformationTypes } from "@/constants";
import { getImageSize } from "@/lib/utils";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params: { id },
}: SearchParamProps) => {
  const image = await getImageById(id);

  const author =
    (image?.author.firstName ?? "Unknown") +
    " " +
    (image?.author.lastName ?? "user");

  const transformationTool =
    transformationTypes[image?.transformationType as TransformationTypeKey]
      ?.title;

  return {
    title: image ? `${image.title} by ${author}` : "Image not found",
    description: image
      ? `Edited image is called ${image.title} which has been edited with the ${transformationTool} tool`
      : "Couldn't find any image with this id.",
  };
};

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = await auth();

  const image = await getImageById(id);

  if (!image) notFound();

  return (
    <>
      <Header title={image.title} shareable />

      <section className="mt-5 flex flex-wrap gap-4">
        <div className="p-14-medium md:p-16-medium flex gap-2">
          <p className="text-dark-600">Transformation:</p>
          <p className=" capitalize text-purple-400">
            {image.transformationType}
          </p>
        </div>

        {image.prompt && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2 ">
              <p className="text-dark-600">Prompt:</p>
              <p className=" capitalize text-purple-400">{image.prompt}</p>
            </div>
          </>
        )}

        {image.color && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Color:</p>
              <p className=" capitalize text-purple-400">{image.color}</p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Aspect Ratio:</p>
              <p className=" capitalize text-purple-400">{image.aspectRatio}</p>
            </div>
          </>
        )}
      </section>

      <section className="mt-10 border-t border-dark-400/15">
        <div className="transformation-grid">
          {/* MEDIA UPLOADER */}
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600">Original</h3>

            <Image
              width={getImageSize(image.transformationType, image, "width")}
              height={getImageSize(image.transformationType, image, "height")}
              src={image.secureURL}
              alt="Original image"
              className="transformation-original_image"
            />
          </div>

          {/* TRANSFORMED IMAGE */}
          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
            hasDownload={true}
          />
        </div>

        {userId === image.author.clerkId && (
          <div className="mt-4 space-y-4">
            <Button asChild type="button" className="submit-button capitalize">
              <Link href={`/transformations/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            <DeleteConfirmation imageId={image._id} />
          </div>
        )}
      </section>
    </>
  );
};

export default ImageDetails;
