import React from "react";

export default function ApplicationLogo({ className }: any) {
    return (
        <div
            className={`${className} flex flex-col items-center justify-center bg-red-700 text-white font-bold text-3xl rounded-full`}
        >
            MT
        </div>
    );
}
