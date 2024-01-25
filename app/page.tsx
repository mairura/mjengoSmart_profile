"use client"

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { MenuAlt2Icon } from "@heroicons/react/outline";
// import MobileNavigation from "@/Components/Navbar/Mobile";
import {  BiBell, BiUserCircle } from "react-icons/bi";
import { HiOutlineLogout, HiOutlineUsers } from "react-icons/hi";
// import LatestNotifications from "@/Components/Notifications/LatestNotifications";
import TopNav from "@/components/Navbar/TopNav";
import DesktopNavigation from "@/components/Navbar/Desktop";
import MobileNavigation from "@/components/Navbar/Mobile";
// import TopNav from "@/Components/Navbar/TopNav";

type Props = {
    auth: any;
    header: any;
    children: React.ReactNode;
};

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Dashboard({ auth, header, children }: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <TopNav auth={auth} user={auth?.user} />
            <div className="flex">
                <MobileNavigation
                    user={auth?.user}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <DesktopNavigation user={auth?.user} />

                <div className="flex flex-1 overscroll-contain w-full">
                    <main className="w-full">
                        <div className="py-6 sm:py-9 px-4 md:px-6 w-full">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
