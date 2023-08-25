import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiFileTextLine, RiProfileLine } from "react-icons/ri";
import { TbGavel } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";

const Sidebar = ({ activeTab, handleTabClick }: any) => {
  return (
    <div className="hidden lg:block  space-y-3 w-[20%] lg:sticky lg:top-0 lg:h-screen">
      <div
        className={`flex items-center space-x-3 px-6 py-3 cursor-pointer ${
          activeTab === "Teacher"
            ? "text-blue-800 bg-blue-100"
            : "text-gray-900"
        }  `}
      >
        <svg
          fill="#000"
          width="22"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
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
        <div
          className={`${
            activeTab === "Teacher" ? "text-blue-800" : "text-gray-900"
          }`}
          onClick={handleTabClick}
        >
          Users
        </div>
      </div>
    </div>
  );
};

export {Sidebar};
