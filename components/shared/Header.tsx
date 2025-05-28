import Share from "./Share";

const Header = ({
  title,
  subTitle,
  shareable,
}: {
  title: string;
  subTitle?: string;
  shareable?: boolean;
}) => {
  return (
    <>
      <h2
        className="h2-bold text-dark-600"
        style={{
          display: shareable ? "inline-block" : "block",
          marginRight: shareable ? "0.5rem" : 0,
        }}
      >
        {title}
      </h2>

      {shareable && <Share title={title} />}

      {!!subTitle && <p className="p-16-regular mt-4">{subTitle}</p>}
    </>
  );
};

export default Header;
