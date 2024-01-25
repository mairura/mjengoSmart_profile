import Logo from "../../../public/img/svg/mjengo.svg";
import { Menu, Transition } from "@headlessui/react";
// import { MenuAlt2Icon } from "@heroicons/react/outline";
// import { XIcon } from "@heroicons/react/outline";
import { BiChevronDown, BiBell, BiUserCircle, BiMenu } from "react-icons/bi";
import React, { Fragment, useState, useEffect } from "react";
import { HiOutlineLogout, HiOutlineMenuAlt2, HiOutlineUsers } from "react-icons/hi";
import Image from "next/image";
import { classNames, hasPermission } from "@/Shared/helpers";
import Link from "next/link";
import LatestNotifications from "@/components/Notifications/LatestNotifications";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { navigation } from "@/Shared/data";

type Props = {
  auth: any;
  user: any;
};

function TopNav({ auth, user }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const permissions = user?.user_permissions || [];

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [sidebarOpen]);

  return (
    <div className="flex py-2.5 w-full justify-between shadow-sm border-b border-gray-200 sticky top-0 z-10 flex-shrink-0 bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <div className="fixed inset-0 flex z-40">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0">
              <div
                className="absolute inset-0 bg-gray-600 opacity-75 backdrop-blur-sm"
                aria-hidden="true"
              ></div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <aside
              className=" text-gray-100 relative flex-1 flex-col max-w-[260px] w-full pt-5 pb-4 z-50 bg-gray-100 flex justify-between md:hidden"
              data-dev-hint="mobile menu bar"
            >
              <div className="absolute top-0 right-0 -mr-14 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    className="h-6 w-6 text-red"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                <Image
                  className="h-12"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item: any) => (
                    <React.Fragment key={item.name}>
                      {/* {hasPermission(permissions, item.permission) ? ( */}
                        <Link
                          href={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={classNames(
                            window.location.href.startsWith(item.href)
                              ? "bg-red-500 text-white"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon className="mr-3" />

                          {item.name}
                        </Link>
                      {/* ) : null} */}
                    </React.Fragment>
                  ))}
                </nav>
              </div>
            </aside>
          </Transition.Child>
        </div>
      </Transition.Root>

      {/* Mobile menu button */}
      <button
        type="button"
        className="px-4 border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <HiOutlineMenuAlt2 className="h-6 w-6" aria-hidden="true" /> 
        {/* Menu Here */}
      </button>

      {/* Logo */}
      <div className="flex gap-3 md:gap-4 pl-0 md:pl-6 items-center flex-shrink-0">
        <Image
          className="h-11 md:h-16"
          src={Logo}
          alt="MjengoMartLogo"
          priority
        />
        <div className="w-0.5 h-9 bg-zinc-500 rounded-sm"></div>
        <p className="text-sm md:text-lg font-bold text-zinc-600">
          {auth?.user?.role?.name}
          User Name
        </p>
      </div>
      {/* Notifications,Avatar and logout dropdown */}
      <div className="flex items-center mr-4 md:ml-6">
        <LatestNotifications />
        {auth?.user.avatar_url ? (
          <Image
            className="hidden sm:block h-8 w-8 mx-2 sm:mx-4 rounded-full"
            src={auth.user.avatar_url}
            alt="avatar"
          />
          
        ) : (
          <BiUserCircle className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
        )}
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <span className="sr-only">Open user menu</span>
              <BiChevronDown className="h-5 w-5 text-black" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <Link
                  href="/profile"
                  as="button"
                  className={classNames(
                    "hover:bg-red-50 w-full px-4 py-2 flex text-sm text-gray-700"
                  )}
                >
                  <HiOutlineUsers className="w-4 h-4 mr-2" />
                  Profile
                </Link>
              </Menu.Item>
              <hr />
              <Menu.Item>
                <Link
                  href="/logout"
                  as="button"
                  //   method="post"
                  className={classNames(
                    "hover:bg-red-50 w-full px-4 py-2 flex text-sm text-gray-700"
                  )}
                >
                  <HiOutlineLogout className="w-4 h-4 mr-2" />
                  Sign Out
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default TopNav;
