import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "bg-neutral-900 p-4 border border-neutral-800",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
