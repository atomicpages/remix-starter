import { cx } from "class-variance-authority";

type TwoPanelProps = {
  children: React.ReactNode;
  img: string;
  alt: string;
  order?: "left" | "right";
};

export const TwoPanel: React.FC<TwoPanelProps> = ({
  img,
  children,
  alt,
  order = "right",
}) => {
  return (
    <div
      className={cx(
        "flex w-full h-full",
        (order === "right" && "flex-row") || "flex-row-reverse",
      )}>
      <div className="flex h-full w-1/2 relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center relative xs:px-4">
          {children}
        </div>
      </div>
      <img className="w-1/2 object-cover h-full" src={img} alt={alt} />
    </div>
  );
};
