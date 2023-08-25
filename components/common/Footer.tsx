import React from 'react';
import Image from 'next/image';
import {
  FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaGoogle,
} from 'react-icons/fa';

const Footer = () => (
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
      <img
              src="/images/choice.svg"
              alt="student teacher"
              style={{ width: "50px" }}
            />
        
          {/* <img
            src="/images/kudade-logo-white.png"
            alt="kudade logo"
            // style="width:120px"
            style={{ width: "120px" }}
          /> */}
       
      </div>
      <p className="text-gray-400 sm:text-base text-sm">
        Education is the future. We love to create dependable schools
        solutions for all
      </p>
    </div>

    <div className="flex items-center sm:space-x-8 space-x-6 sm:text-base text-sm">
      <a href="">
        <div>User</div>
      </a>
      <div>Teacher</div>
      <div>FAQs</div>
      <div>Student</div>
    </div>
  </div>
  <div className="w-11/12 mx-auto py-10 flex flex-wrap gap-6 justify-between">
    <div className="sm:text-base text-sm">
      &#169; 2023 recordKeeper, All right reserved.
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
);

export {Footer};
