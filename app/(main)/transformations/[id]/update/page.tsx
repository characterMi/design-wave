import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getImageById } from "@/actions/image.actions";
import { getUserById } from "@/actions/user.actions";
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";

export const metadata = {
  title: "Update image",
  description: "Update an edited image.",
};

const UpdateTransformationPage = async ({
  params: { id },
}: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const image = await getImageById(id);

  if (image?.author?.clerkId !== userId)
    redirect(!!image?._id ? `/transformations/${image?._id}` : "/");

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>
      <Header title={transformation.title} subTitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Update"
          userId={user._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export default UpdateTransformationPage;
