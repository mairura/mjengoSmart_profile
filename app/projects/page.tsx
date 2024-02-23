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
          <section className="text-gray-600">
            <div className="overflow-hidden mb-8 rounded-lg border w-full shadow-xs bg-white">
              <div className="overflow-x-auto w-full">
                <table className="w-full lg:table-fixed whitespace-nowrap bg-white">
                  <thead className="border-b border-gray-200">
                    <tr className="text-sm sm:text-sm font-bold bg-white text-left text-black border-b">
                      <th className="px-4 sm:px-4 py-2 sm:py-4">No</th>
                      <th className="px-4 sm:px-4 py-2 sm:py-4">Date</th>
                      <th
                        // width="20%"
                        className="px-4 sm:px-4 py-2 sm:py-4 whitespace-nowrap"
                      >
                        Project Name
                      </th>
                      <th className="px-4 sm:px-4 py-2 sm:py-4">Location</th>
                      <th className="px-4 sm:px-4 py-2 pr-6 sm:py-4">Status</th>
                      <th className="px-4 whitespace-nowrap sm:px-4 py-2 sm:py-4">
                        Due Date
                      </th>
                      <th className="px-4 sm:px-4 py-2 sm:py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y">
                    <tr className="text-gray-700">
                      {/* map */}
                      <td className="px-4 sm:p-4 text-sm sm:text-sm">
                        {/* {index + 1} */}1
                      </td>
                      <td className="px-4 whitespace-nowrap sm:p-4 text-sm sm:text-sm">
                        {/* {moment(project.created_at).format("MMM DD, YYYY")} */}
                        Apr 23, 2023
                      </td>
                      <td className="sm:p-4 whitespace-nowrap px-4 text-sm sm:text-sm ">
                        {/* <Link href={route("projects.show", project.id)}>
                          {project?.name}
                        </Link> */}
                        Banana Homes
                      </td>
                      <td className="sm:p-4 px-6 py-4 ">
                        {/* {`${project.ward.sub_county.county?.name} ${project.ward.sub_county?.name}${project.ward.name} `} */}
                        MACHAKOS
                      </td>
                      <td className="sm:p-4 px-6 py-4">
                        <span
                          className="px-2 py-1.5 text-sm rounded-2xl whitespace-nowrap text-green text-green-600 bg-green-100"
                          // className={`px-2 py-1.5 text-sm rounded-2xl whitespace-nowrap ${
                          //   project.status === "Approved"
                          //     ? "text-green text-green-600 bg-green-100"
                          //     : "text-red text-red-600 bg-red-100"
                          // }`}
                        >
                          {/* {project.status ?? "Pending"} */}
                          Complete
                        </span>
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap text-sm flex">
                        {/* {project.proposed_end_date && (
                          <>
                            <span>
                              {moment(project.proposed_end_date).format(
                                "MMM DD, YYYY"
                              )}
                            </span>
                          </>
                        )} */}
                        <span>Apr 23, 2023</span>
                      </td>
                      <td className="p-2 sm:p-4 text-sm sm:text-sm items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 group-hover:text-mjengo-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* pagination */}
            <div className="w-full flex justify-end">
              <div className="border h-[40px] border-gray-200  w-fit rounded-md flex bg-white divide-x">
                {/* Previous button */}
                <button className="grid place-content-center w-10 hover:bg-gray-50">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4372 9.99984H4.77051M4.77051 9.99984L10.6038 15.8332M4.77051 9.99984L10.6038 4.1665"
                      stroke="#344054"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                {/* Page Number button */}
                <button className="grid place-content-center w-10 truncate overflow-ellipsis hover:bg-gray-50 text-center">
                  1
                </button>
                <button className="grid place-content-center w-10 truncate overflow-ellipsis hover:bg-gray-50 text-center">
                  2
                </button>
                <button className="grid place-content-center w-10 truncate overflow-ellipsis hover:bg-gray-50 text-center">
                  ...
                </button>
                <button className="grid place-content-center w-10 truncate overflow-ellipsis hover:bg-gray-50 text-center">
                  9
                </button>
                <button className="grid place-content-center w-10 truncate overflow-ellipsis hover:bg-gray-50 text-center">
                  10
                </button>
                {/* Next button */}
                <button className="grid place-content-center w-10 hover:bg-gray-50">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    className="rotate-180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4372 9.99984H4.77051M4.77051 9.99984L10.6038 15.8332M4.77051 9.99984L10.6038 4.1665"
                      stroke="#344054"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
