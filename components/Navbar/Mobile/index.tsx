import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
// import { XIcon } from "@heroicons/react/outline";
import Logo from "../../../public/img/logo-dashboard.png";
import Image from "next/image";
import { navigation } from "@/Shared/data";
import { classNames, hasPermission } from "@/Shared/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation({
    user,
    sidebarOpen,
    setSidebarOpen
}: any) {
    const permissions = user?.user_permissions || [];
      const route = usePathname();
      const currentRoute = route;
    return (
      <>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        {/* <XIcon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        /> */}
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Image className="h-18 w-48" src={Logo} alt="Workflow" />
                  </div>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigation.map((item: any) => (
                        <React.Fragment key={item.name}>
                          {/* {hasPermission(
                                                permissions,
                                                item.permission
                                            ) ? ( */}
                          <Link
                            href={item.href}
                            className={classNames(
                              route.startsWith(item.href)
                                ? "bg-primary text-white"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                route.startsWith(item.href)
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                          {/* ) : null} */}
                        </React.Fragment>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
            </Transition.Root>
      </>
    );
}
