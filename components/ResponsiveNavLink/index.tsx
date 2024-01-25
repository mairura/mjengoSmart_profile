import Link from "next/link";
import React from "react";

type Props = {
  method?: string;
  as?: string;
  href: string;
  active?: boolean;
  children: React.ReactNode;
};

export default function ResponsiveNavLink({
  method = "get",
  as = "a",
  href,
  active = false,
  children,
}: Props) {
  return (
    <Link
      as={as}
      href={href}
      className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
        active
          ? "border-red-400 text-red-700 bg-red-50 focus:outline-none focus:text-red-800 focus:bg-red-100 focus:border-red-700"
          : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
      } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
    >
      {children}
    </Link>
  );
}
