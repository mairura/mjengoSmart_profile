// import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ handleChange }: Props) => {
    return (
        <div className="relative rounded-md w-full flex items-center">
            <div className="cursor-pointer absolute inset-y-0 left-0 px-2 flex items-center h-10 bg-gray-100 rounded-l">
                <CiSearch
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                />
            </div>
            <input
                type="text"
                className="h-10 shadow-sm focus:ring-0 focus:border-0 block w-full sm:text-sm border-gray-300 px-4 rounded mb-2 pl-12"
                placeholder="Search"
                onChange={handleChange}
            />
        </div>
    );
};
