import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <nav
            className="flex justify-between"
            // style="background-color: #0E0E2C; color: white;"
            style={{
              backgroundColor: "#0E0E2C",
              color: "white",
            }}
          >
            <div className="flex flex-wrap items-center justify-between  lg:justify-between mx-auto py-6 w-full px-6 lg:py-7">
              <a href="#">
                <img
                  src="/images/test2.svg"
                  alt="kudade logo"
                  // style="width:130px"
                  style={{ width: "130px" }}
                />
                {/* <!-- <img src="Image/kudade-logo-white.png" style="width:140px" alt=""> --> */}
              </a>
              <div className="flex">
                <button
                  type="button"
                  className="flex items-center lg:hidden text-sm md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open main menu</span>
                  <span
                    className="rounded-full"
                    // style="background-color: white; color: black; padding: 8px 12px;"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      padding: "8px 12px",
                    }}
                  >
                    IN
                  </span>
                </button>

                <div className="flex items-center md:order-2">
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <div className="px-4 py-4">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        Investor Name
                      </span>
                      <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400 pt-2">
                        Name@Kudade.com
                      </span>
                    </div>
                    <ul className="py-3" aria-labelledby="user-menu-button">
                      <li>
                        <a
                          href="Profile-individual.html"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Raise Now
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                // className="hidden lg:flex items-center space-x-8 items-center"
                className="hidden lg:flex  space-x-8 items-center"
              >
                <div
                  // style="cursor: pointer;"
                  style={{ cursor: "pointer" }}
                >
                  <button
                    type="button"
                    className="flex items-center text-sm md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                  >
                    <span
                      className="rounded-full"
                      // style="background-color: white; color: black; padding: 8px 12px;"
                      style={{
                        backgroundColor: "white",
                        color: "white",
                        padding: "8px 12px",
                      }}
                    >
                      IN
                    </span>
                    <span className="px-2"> Investor Name</span>
                    <img className="" src="/images/chevron-down.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex justify-between w-full ">
        <div className=" lg:block hidden space-y-3 w-[20%] lg:sticky lg:top-0 lg:h-screen">
          
            <div
              // className="flex items-center space-x-3 bg-blue-100 px-6 py-3 text-blue-800 bg-blue-100"
              className="flex items-center space-x-3  px-6 py-3 text-blue-800 bg-blue-100"
            >
              <svg
                width="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
                  fill="currentColor"
                />{" "}
                <path d="M11 7H13V17H11V7Z" fill="currentColor" />
                <path d="M15 13H17V17H15V13Z" fill="currentColor" />
                <path d="M7 10H9V17H7V10Z" fill="currentColor" />
              </svg>
              <div className="text-[#000]">Dashboard</div>
            </div>
         
          
            <div className="flex items-center space-x-3 px-6 py-3 ">
              <svg
                width="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#000]"
              >
                <path
                  d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
                  fill="currentColor"
                />
              </svg>
              <div className="text-[#000]">Raises</div>
            </div>
          
         
            <div className="flex items-center space-x-3 px-6 py-3 ">
              <svg
                fill="currentColor"
                width="22"
                version="1.1"
                id="XMLID_125_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                className="text-[#000]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="grow">
                    {" "}
                    <g>
                      {" "}
                      <path d="M16.9,24H7.2l-1-7H4v-2h7v-3.1c-1.9,0.3-3.8-0.2-5.2-1.4C4.1,9,3.6,6.8,4.4,4.8l0.2-0.4L5,4.3C7,3.6,9.4,4,11,5.2 c0-1.4,0.6-2.8,1.8-3.8l0,0c1.1-0.9,2.6-1.4,4-1.4c0.7,0,1.5,0.1,2.2,0.3l0.4,0.1l0.2,0.4c0.9,2,0.4,4.2-1.4,5.7 c-1.4,1.2-3.3,1.7-5.2,1.4V9c0,0.1,0,0.3,0,0.4V15h7v2h-2.1L16.9,24z M8.9,22h6.3l0.7-5H8.2L8.9,22z M6.1,6.1 c-0.3,1,0.1,2.1,1,2.9c1,0.9,2.5,1.2,3.8,0.9C11,9.7,11,9.5,11,9.3V9c0-0.8-0.4-1.5-1.1-2.1C8.9,6.1,7.5,5.8,6.1,6.1z M13.1,5.9 c1.4,0.3,2.8,0,3.8-0.9c0.9-0.8,1.3-1.9,1-2.9c-1.4-0.3-2.8,0-3.8,0.9l0,0C13.2,3.7,12.8,4.8,13.1,5.9z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div className="text-[#000]">Investments</div>
            </div>
          
         
            <div className="flex items-center space-x-3 px-6 py-3 ">
              <svg
                fill="currentColor"
                width="22"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                className="text-[#000]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M488.727,100.848H372.364V31.03c0-12.853-10.42-23.273-23.273-23.273H162.909c-12.853,0-23.273,10.42-23.273,23.273 v69.818H23.273C10.42,100.848,0,111.268,0,124.121v170.667c0,11.247,8.045,20.885,19.11,22.897l11.92,2.166V480.97 c0,12.853,10.42,23.273,23.273,23.273h403.394c12.853,0,23.273-10.42,23.273-23.273V319.851l11.922-2.166 c11.064-2.012,19.108-11.65,19.108-22.897V124.121C512,111.268,501.58,100.848,488.727,100.848z M186.182,54.303h139.636v46.545 H186.182V54.303z M434.424,457.697H77.576V328.315l93.091,16.925v27.124c0,12.853,10.42,23.273,23.273,23.273h124.121 c12.853,0,23.273-10.42,23.273-23.273v-27.122l93.091-16.925V457.697z M217.212,349.091v-46.545h77.576v46.545H217.212z M465.455,275.364l-124.121,22.568v-18.66c0-12.853-10.42-23.273-23.273-23.273H193.939c-12.853,0-23.273,10.42-23.273,23.273 v18.66L46.545,275.364V147.394h116.364h186.182h116.364V275.364z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div className="text-[#000]">Investors</div>
            </div>
          

          
            <div className="flex items-center space-x-3 px-6 py-3">
              <svg
                viewBox="0 0 24 24"
                width="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#000]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.5 7H14.5M9.5 11H14.5M9.5 15H14.5M18 21V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.0799 6 6.2V21M20 21H4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div className="text-[#000]">Businesses</div>
            </div>
         
         
            <div className="flex items-center space-x-3 px-6 py-3">
              <svg
                viewBox="0 0 24 24"
                width="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 6V17C3 18.6569 4.34315 20 6 20H20C20.5523 20 21 19.5523 21 19V16M19 8H5C3.89543 8 3 7.10457 3 6V6C3 4.89543 3.89543 4 5 4H18C18.5523 4 19 4.44772 19 5V8ZM19 8H20C20.5523 8 21 8.44772 21 9V12M21 12H18C16.8954 12 16 12.8954 16 14V14C16 15.1046 16.8954 16 18 16H21M21 12V16"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div className="text-[#000]">Financials</div>
            </div>
         
         
            <div className="flex items-center space-x-3 px-6 py-3">
              <svg
                viewBox="0 0 24 24"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="text-[#000]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div className="text-[#000]">Issues</div>
            </div>
         
          
            <div className="flex items-center space-x-3 px-6 py-3">
              <svg
                viewBox="0 0 16 16"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="text-[#000]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g fill="currentColor">
                    {" "}
                    <path d="M4.75 8a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM4 11.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM4.75 5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"></path>{" "}
                    <path
                      fill-rule="evenodd"
                      d="M1 2.25A2.25 2.25 0 013.25 0h6.293c.331 0 .65.132.884.366l4.207 4.207c.234.235.366.553.366.884v8.293A2.25 2.25 0 0112.75 16h-9.5A2.25 2.25 0 011 13.75V2.25zm2.25-.75a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75V6H9.75A.75.75 0 019 5.25V1.5H3.25zm7.25 1.06l1.94 1.94H10.5V2.56z"
                      clipRule="evenodd"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div className="text-[#000]">Expert Analysis</div>
            </div>
          
          
            <div className="flex items-center space-x-3 px-6 py-3">
              <svg
                viewBox="0 0 24 24"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="text-[#000]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <defs>
                    {/* <style>.cls-1{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.92px;}</style>  */}
                  </defs>{" "}
                  <g id="roll_brush" data-name="roll brush">
                    {" "}
                    <circle
                      className="cls-1"
                      cx="12.01"
                      cy="13.12"
                      r="1.8"
                    ></circle>{" "}
                    <rect
                      className="cls-1"
                      x="1.46"
                      y="1.49"
                      width="21.1"
                      height="21.1"
                    ></rect>{" "}
                    <polygon
                      className="cls-1"
                      points="22.56 7.25 16.28 7.25 14.37 7.25 1.46 7.25 1.46 1.49 22.56 1.49 22.56 7.25"
                    ></polygon>{" "}
                    <line
                      className="cls-1"
                      x1="4.34"
                      y1="4.37"
                      x2="6.25"
                      y2="4.37"
                    ></line>{" "}
                    <line
                      className="cls-1"
                      x1="8.17"
                      y1="4.37"
                      x2="10.09"
                      y2="4.37"
                    ></line>{" "}
                    <line
                      className="cls-1"
                      x1="12.01"
                      y1="4.37"
                      x2="13.93"
                      y2="4.37"
                    ></line>{" "}
                    <path
                      className="cls-1"
                      d="M14,15.76a2.88,2.88,0,0,0-4.91,2v1h5.76v-1A2.88,2.88,0,0,0,14,15.76Z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div className="text-[#000]">Staffs</div>
            </div>
         
        </div>

        <div
          className="lg:w-[80%] w-full sm:p-10 p-5 space-y-10"
          // style="background-color: #F7F7F7; "
          style={{ backgroundColor: "#F7F7F7" }}
        >
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="space-y-2 ">
              <div className="font-semibold text-xl">
                Welcome back, John Doe
              </div>
              <div className="text-gray-800">
                Here is your statistics for today
              </div>
            </div>
            <div>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              >
                <option selected>Today</option>
                <option value="">Years</option>
                <option value="">Month</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="xl:w-[68%] w-full">
              <div className="grid xl:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-4">
                <div className="bg-white p-6 space-y-3">
                  <div className="text-gray-900">Raises</div>
                  <div className="font-semibold sm:text-xl text-lg">54</div>
                  <div className="flex items-center space-x-3 text-red-800 ">
                    <img src="/images/stock-down.svg" alt="" />
                    <div>2% </div>
                  </div>
                </div>
                <div className="bg-white p-6 space-y-3">
                  <div className="text-gray-900">Top Raise</div>
                  <div className="font-semibold sm:text-xl text-lg">
                    ₦100,000
                  </div>
                  <div className="flex items-center space-x-3 text-red-800 ">
                    <img src="/images/up-stock.svg" alt="" />
                    <div>2% </div>
                  </div>
                </div>
                <div className="bg-white p-6 space-y-3">
                  <div className="text-gray-900">Businesses</div>
                  <div className="font-semibold sm:text-xl text-lg">54</div>
                  <div className="flex items-center space-x-3 text-red-800 ">
                    <img src="/images/up-stock.svg" alt="" />
                    <div>2% </div>
                  </div>
                </div>
                <div className="bg-white p-6 space-y-3">
                  <div className="text-gray-900">Investors</div>
                  <div className="font-semibold sm:text-xl text-lg">54</div>
                  <div className="flex items-center space-x-3 text-red-800 ">
                    <img src="/images/stock-down.svg" alt="" />
                    <div>2% </div>
                  </div>
                </div>
                <div className="bg-white p-6 space-y-3">
                  <div className="text-gray-900">Businesses Raising</div>
                  <div className="font-semibold sm:text-xl text-lg">54</div>
                  <div className="flex items-center space-x-3 text-red-800 ">
                    <img src="/images/stock-down.svg" alt="" />
                    <div>2% </div>
                  </div>
                </div>
                <div className="bg-white p-6 space-y-3">
                  <div className="text-gray-900">Awaiting Approval</div>
                  <div className="font-semibold sm:text-xl text-lg">54</div>
                  <div className="flex items-center space-x-3 text-red-800 ">
                    <img src="/images/stock-down.svg" alt="" />
                    <div>2% </div>
                  </div>
                </div>
                <div className="bg-white p-6 space-y-3 col-span-2">
                  <div className="text-gray-900">Amount Raised</div>
                  <div className="font-semibold sm:text-xl text-lg">
                    ₦100,000,000
                  </div>
                  <div className="flex items-center space-x-3 text-red-800 ">
                    <img src="/images/stock-down.svg" alt="" />
                    <div>2% </div>
                  </div>
                </div>
              </div>

              <div className="border p-4 mt-10">
                <div className="flex justify-between items-center border-b pb-4">
                  <div className="font-semibold">Raise Chart (in millions)</div>
                  <div>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    >
                      <option selected>Last 12 months</option>
                      <option value="">Last 7 days</option>
                      <option value="">Day</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <img src="/images/Raise-chart.png" alt="" />
                </div>
              </div>

              <div className="border p-4 mt-10">
                <div className="flex justify-between items-center border-b pb-4">
                  <div className="font-semibold">Users Activity</div>
                  <div>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    >
                      <option selected>Last 12 months</option>
                      <option value="">Last 7 days</option>
                      <option value="">Day</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <img src="/images/user-activity.png" alt="" />
                </div>
              </div>

              <div className="border p-4 mt-10 w-full">
                <div className=" border-b pb-4">
                  <div className="font-semibold">Pending Raise Bids</div>
                </div>
                <div className="mt-5">
                  <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            ID
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Company
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Estimated raise
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            #121552
                          </th>
                          <td className="px-6 py-4">Kudade</td>
                          <td className="px-6 py-4">₦100,000,000</td>
                          <td className="px-6 py-4">02/10/2022</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            #21552
                          </th>
                          <td className="px-6 py-4">Sterling Bank</td>
                          <td className="px-6 py-4">₦12,500,000</td>
                          <td className="px-6 py-4">02/10/2022</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            #121552
                          </th>
                          <td className="px-6 py-4">Macron INC</td>
                          <td className="px-6 py-4">₦78,000,000</td>
                          <td className="px-6 py-4">02/10/2022</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border p-4 mt-10 w-full">
                <div className=" border-b pb-4">
                  <div className="font-semibold">Pending Investments</div>
                </div>
                <div className="mt-5">
                  <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Business name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Amount
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Investor name
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            12/1/2022
                          </th>
                          <td className="px-6 py-4">Kudade</td>
                          <td className="px-6 py-4">₦100,000,000</td>
                          <td className="px-6 py-4">Adekunle gold</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            3/5/2023
                          </th>
                          <td className="px-6 py-4">Sterling Bank</td>
                          <td className="px-6 py-4">₦12,500,000</td>
                          <td className="px-6 py-4">Zinoleesky</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            8/7/2021
                          </th>
                          <td className="px-6 py-4">Macron INC</td>
                          <td className="px-6 py-4">₦78,000,000</td>
                          <td className="px-6 py-4">Bella shmurda</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[30%] w-full xl:mt-0 mt-10 space-y-10">
              <div className="border p-4">
                <div className="border-b mb-5 pb-4 font-medium">
                  Top Businesses
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4 items-center">
                    <img
                      src="/images/pic1.png"
                      // style="width: 90px;" alt=""
                      style={{ width: "90px" }}
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="font-semibold">Kudades</div>
                      <div className="text-blue-900">
                        Raised <span>₦100,000,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src="/images/pic2.png"
                      style={{ width: "90px" }}
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="font-semibold">Kudades</div>
                      <div className="text-blue-900">
                        Raised <span>₦100,000,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src="/images/pic3.png"
                      style={{ width: "90px" }}
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="font-semibold">Kudades</div>
                      <div className="text-blue-900">
                        Raised <span>₦100,000,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-5 pt-4 text-center">View more</div>
              </div>

              <div className="border p-4">
                <div className="border-b mb-5 pb-4 font-medium">
                  Top Investor
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4 items-center">
                    <img
                      src="/images/indivi-pic.jpg"
                      style={{ width: "90px" }}
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="font-semibold">Adeola VC</div>
                      <div className="text-blue-900">
                        Invested <span>₦100,000,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src="/images/co-pic.jpg"
                      style={{ width: "90px" }}
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="font-semibold">Kudades Angel PLC</div>
                      <div className="text-blue-900">
                        Invested <span>₦100,000,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src="/images/pic3.png"
                      style={{ width: "90px" }}
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="font-semibold">Double Betting INC</div>
                      <div className="text-blue-900">
                        Invested <span>₦100,000,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src="/images/Thumbs3.png"
                      style={{ width: "90px" }}
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="font-semibold">Jerry VC</div>
                      <div className="text-blue-900">
                        Invested <span>₦100,000,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-5 pt-4 text-center">View more</div>
              </div>

              <div className="border p-4">
                <div className="border-b mb-5 pb-4 font-medium">
                  Top Industries
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4 items-center">
                    <div
                      className="bg-orange-300 flex items-center justify-center text-3xl"
                      // style="width:90px; height: 80px;
                      style={{
                        width: "90px",
                        height: "80px",
                      }}
                    >
                      A
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">Agriculture</div>
                      <div className="text-blue-900">
                        <span>₦100,000,000</span> Invested{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div
                      className="bg-red-300 flex items-center justify-center text-3xl"
                      style={{
                        width: "90px",
                        height: "80px",
                      }}
                    >
                      E
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">E-Learning</div>
                      <div className="text-blue-900">
                        <span>₦100,000,000</span> Invested{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div
                      className="bg-green-300 flex items-center justify-center text-3xl"
                      style={{
                        width: "90px",
                        height: "80px",
                      }}
                    >
                      B
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">Biotech</div>
                      <div className="text-blue-900">
                        <span>₦800,000,000</span> Invested{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div
                      className="bg-pink-300 flex items-center justify-center text-3xl"
                      style={{
                        width: "90px",
                        height: "80px",
                      }}
                    >
                      A
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">Agriculture</div>
                      <div className="text-blue-900">
                        <span>₦100,000,000</span> Invested{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-5 pt-4 text-center">View more</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white"
        // style="background-color: #0E0E2C;"
        style={{ backgroundColor: "#0E0E2C" }}
      >
        <div
          className="w-11/12 mx-auto py-10"
          // style="border-bottom: .8px white solid;"
          style={{ borderBottom: ".8px white solid" }}
        >
          <div className="md:w-[40%] w-full mb-10 space-y-6">
            <div>
              <a href="#">
                <img
                  src="/images/kudade-logo-white.png"
                  alt="kudade logo"
                  // style="width:120px"
                  style={{ width: "120px" }}
                />
              </a>
            </div>
            <p className="text-gray-400 sm:text-base text-sm">
              Invest in the future. We love to create dependable business
              solutions for companies of all sizes and any industry.
            </p>
          </div>

          <div className="flex items-center sm:space-x-8 space-x-6 sm:text-base text-sm">
            <a href="">
              <div>Investor</div>
            </a>
            <div>SMEs</div>
            <div>FAQs</div>
            <div>About Us</div>
          </div>
        </div>
        <div className="w-11/12 mx-auto py-10 flex flex-wrap gap-6 justify-between">
          <div className="sm:text-base text-sm">
            &#169; 2022 Kudade, All right reserved.
          </div>
          <div className=" grid grid-cols-4 gap-6">
            <img
              src="/images/instagram-logo-svgrepo-com.svg"
              className="w-6"
              alt=""
            />
            <img
              src="/images/linkedin-logo-svgrepo-com.svg"
              className="w-6"
              alt=""
            />
            <img
              src="/images/facebook-logo-svgrepo-com.svg"
              className="w-6"
              alt=""
            />
            <img
              src="/images/twitter-rounded-svgrepo-com.svg"
              className="w-6"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
