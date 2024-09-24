import { FC } from "react";

interface ITitleProps {
  children: JSX.Element | string;
}

export const Title: FC<ITitleProps> = ({ children }) => {
  return (
    <h3 className="text-[clamp(20px,_5vw,_35px)] font-mono text-secondary-main">
      {children}
    </h3>
  );
};
