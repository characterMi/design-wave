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

const AddTransformationPage = ({
  params: { type },
}: {
  params: { type: string };
}) => {
  return <div>AddTransformationPage {type}</div>;
};

export default AddTransformationPage;
