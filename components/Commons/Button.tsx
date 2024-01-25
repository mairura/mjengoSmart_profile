import { classNames } from "@/Shared/helpers";
import React from "react";

type Props = {
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
  processing?: boolean;
  children: React.ReactNode;
};
export default function Button({
  type = "submit",
  onClick = () => {},
  className = "",
  processing,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "w-full flex bg-mjengo-red-500 hover:bg-mjengo-red-600 text-white justify-center py-2 px-4 border border-transparent rounded-md mb-2 shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap",
        processing && "opacity-50",
        className ||
          "text-white bg-mjengo-red-500 hover:bg-mjengo-red-600 focus:ring-mjengo-red-500"
      )}
      disabled={processing}
    >
      {children}
    </button>
  );
}

type GenericButtonProps = {
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export const GenericButton = ({
  type = "button",
  className = "",
  onClick,
  disabled = false,
  children,
}: GenericButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        "w-full flex justify-center py-2 px-4 border border-transparent rounded-md mb-2 shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap",
        disabled && "opacity-25",
        className ??
          "text-white bg-mjengo-red-500 hover:bg-mjengo-red-600 focus:ring-mjengo-red-500"
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
