import { MouseEvent, ReactNode } from "react";

type ButtonVariant = `primary` | "primaryOutlined" | "redOutlined";

type Props = {
  variant: ButtonVariant;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
};

export function Button({ variant, className = "", onClick, children }: Props) {
  const BUTTON_VARIANT: { [key in ButtonVariant]: string } = {
    primary: `text-white bg-primary`,
    primaryOutlined: "text-primary bg-white border border-primary",
    redOutlined: "text-red-500 bg-white border border-red-500",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md py-2 px-4 text-sm outline-none ${BUTTON_VARIANT[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
