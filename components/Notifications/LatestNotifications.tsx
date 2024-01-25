import { Menu, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import Notification3 from "../../../img/notification3.png";
import Link from "next/link";
import Image from "next/image";
import { BiBell } from "react-icons/bi";

const LatestNotifications = () => {
  const [notifications, setNotifications] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     axios.get("/notifications.latestNotifications").then((res: any) => {
  //       if (res.data) {
  //         setNotifications(res.data.data);
  //         setLoading(false);
  //       }
  //     });
  //   };
  //   getData();
  // }, []);

  if (loading) return <></>;

  return (
    <>
      <Menu as="div" className="md:ml-3 relative">
        <div>
          <Menu.Button className="max-w-xs bg-white flex items-center text-sm">
            <span className="relative inline-block mr-3 sm:mr-4">
              <BiBell className="h-6 w-6 text-black" />
              {notifications.length > 0 ? (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs leading-none text-white transform translate-x-1 -translate-y-1.5 bg-red-600 rounded-full">
                  {notifications.length}
                </span>
              ) : null}
            </span>
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[300px] sm:w-96 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <>
                {notifications?.length !== 0 ? (
                  <>
                    <div className="p-4">
                      <div className="flex justify-between">
                        <div className="flex-col">
                          <h4 className="text-sm font-bold text-black">
                            Notifications
                          </h4>
                          <p className="text-xs">
                            Quickly identify notifications that demand action.
                          </p>
                        </div>

                        {/* <BiX className="h-6 w-6" onClick={close}/> */}
                      </div>
                      <ul className="my-4">
                        {notifications.map((notification, index) => (
                          <article
                            className="flex justify-between my-3"
                            key={index}
                          >
                            <div className="flex items-start space-x-3">
                              {/* <Image src={notification?.sender.avatar_url ? notification?.sender.avatar_url : Notification3} alt="Notification" width="30" height="30" className="flex-none rounded-full bg-slate-100" /> */}
                              <div className="relative">
                                <h2 className="font-semibold text-xs text-slate-900">
                                  {/* {notification?.sender.full_name} */}
                                  Item Full Name
                                </h2>
                                <h4 className="text-slate-400 text-xs">
                                  {/* {notification?.item_name} */}
                                  Item Name
                                </h4>
                              </div>
                            </div>
                            <Link
                              href="#"
                              className="text-red-800 text-xs font-semibold"
                            >
                              View
                            </Link>
                          </article>
                        ))}
                      </ul>
                    </div>
                    <hr />
                    <div className="flex justify-center py-4">
                      <Link
                        href="/notifications.index"
                        className="text-black font-semibold text-sm"
                      >
                        See All
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="max-w-lg px-4 py-20 mx-auto space-y-1 text-center">
                    <h2 className="text-lg font-medium mb-4 text-gray-600">
                      No Notifications!
                    </h2>
                  </div>
                )}
              </>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default LatestNotifications;
