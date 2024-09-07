import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export const Button = ({ children, size = "md" }: ButtonProps) => {
  const sizeClassNames = {
    sm: "text-[12px] py-[3px] px-[10px] border-[0.8px]",
    md: "text-[14px] py-[3px] px-[10px] border-[0.8px]",
    lg: "text-[17px] py-[3px] px-[10px] border-[0.8px]",
  };
  return (
    <button
      className={twMerge(
        "bg-white text-textBlack font-sf-pro rounded-full",
        sizeClassNames[size]
      )}
    >
      {children}
    </button>
  );
};
