import React from "react";
import logo from "../../public/img/svg/mjengo.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    linktext?: string;
    link?: string;
};

export default function Guest({ children, title, subtitle, linktext, link }: Props) {
    return (
        <div className="bg-login-bg h-full w-full bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="container">
            <div className="flex justify-start mt-6">
                <Link
                    href="/"
                    className="hover:underline text-gray-700 flex items-center focus:outline-none focus:shadow-outline"
                >
                    <svg width="18" height="18" viewBox="0 0 16 16">
                        <path
                            d="M9 4 L5 8 L9 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="mx-2 text-sm font-medium ">Back</span>
                </Link>
            </div>
            <div className="flex flex-col sm:justify-center mt-20 items-center sm:pt-0 ">
                <Image src={logo} alt="" />
                <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900 mt-[50px]">{title}</h2>

                <div className="w-full sm:max-w-md mt-6 px-6 py-6 bg-white shadow overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
            </div>

        </div>
    );
}
