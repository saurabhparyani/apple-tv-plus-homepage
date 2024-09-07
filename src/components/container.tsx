import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge("max-w-[980px] mx-auto", className)}>
      {children}
    </div>
  );
};
