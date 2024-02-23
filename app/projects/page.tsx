import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-1 overscroll-contain w-full">
      <div className=" flex flex-col  sm:flex-row gap-4 justify-between sm:items-startpy-6 sm:py-9 px-4 md:px-6 w-full">
        <div className="flex flex-col w-full">
          <div>
            <p className="text-xl sm:text-2xl font-bold  text-zinc-800">
              Projects
            </p>
            <p className="text-sm font-semibold text-zinc-500 mt-3">
              Hope you have a good day. This is how your dashboard is looking
              today.
            </p>
          </div>

          <div className="flex justify-between  flex-col md:flex-row mt-6 sm:items-start">
            <div className="my-6 max-w-[460px]">
              <input
                type="search"
                placeholder="Search.."
                className=" rounded-md text-sm border-gray-300 shadow-sm focus:border-blue-500  py-3 p-2 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div className=" flex ">
              <button
                type="button"
                className="inline-flex items-center justify-center border border-transparent bg-primary hover:cursor-pointer px-4 py-2  rounded-md text-sm font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
              >
                <span>Start a new Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
