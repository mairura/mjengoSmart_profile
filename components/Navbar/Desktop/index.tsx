import {
  navigation,
  non_admin_navigation,
  supplier_navigation,
} from "@/Shared/data";
import { classNames, hasPermission } from "@/Shared/helpers";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function DesktopNavigation({ user }: any) {
  const [showNames, setShowNames] = useState(true);

  const permissions = user?.user_permissions || [];
  const routes =
    user?.role?.slug === "supplier" ? supplier_navigation : navigation;
  const is_admin = ["Office Staff", "IT Staff"].includes(user?.role?.group);

  const all_routes = is_admin ? routes : [...routes, ...non_admin_navigation];

  return (
    <div className="hidden md:flex md:flex-col md:inset-y-0 h-full">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div
        className={`flex flex-col flex-grow ${
          showNames ? "md:w-[256px]" : "w-[100px]"
        } min-h-full border-r border-gray-200 bg-white overflow-y-auto`}
      >
        {/* Toggle menu visibility */}
        <div
          className=" w-[65px] h-[40px] pl-4 my-2 hover:cursor-pointer transition-all duration-300"
          onClick={() => setShowNames(!showNames)}
        >
          <div className="w-full h-full flex items-center justify-center rounded-full text-gray-600 transition-transform duration-300 transform">
            {showNames && <IoMenu />}
          </div>
        </div>
        <div className="mt-1 flex-grow flex flex-col">
          <nav className="flex-1 px-4 pb-4 space-y-1">
            {all_routes.map((item: any) => (
              <React.Fragment key={item.name}>
                {/* {hasPermission(permissions, item.permission) ? ( */}

                <Link
                  href={item.href}
                  className={classNames(
                    window.location.href.startsWith(item.href)
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-red-50 hover:text-gray-900",
                    "group flex items-center hover:cursor-pointer px-4 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      window.location.href.startsWith(item.href)
                        ? "text-gray-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {showNames && <p className="">{item.name}</p>}
                </Link>
                {/* ) : null} */}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
