import { getUserById } from "@/actions/user.actions";
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

export function generateMetadata({ params: { type } }: SearchParamProps) {
  const transformation = transformationTypes[type];

  return {
    title: transformation.title,
    description: transformation.subTitle,
  };
}

export const dynamicParams = false;

export const generateStaticParams = () => {
  return [
    { type: "restore" },
    { type: "fill" },
    { type: "remove" },
    { type: "recolor" },
    { type: "removeBackground" },
  ];
};

const AddTransformationPage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const transformation = transformationTypes[type];

  if (!transformation) notFound();

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subTitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationPage;
