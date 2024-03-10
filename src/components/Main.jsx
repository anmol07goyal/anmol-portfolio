import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import BackgroundVideo from "./BackgroundVideo";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center mt-16">
      <div className="w-full h-screen mx-auto p-2 flex justify-center items-center">
        <div className="w-full h-screen text-center">
          <BackgroundVideo />

          <div className="absolute w-[80%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#cbd5e1]">
            <h1 className="py-4">
              Hi, I&#39;m <span className="text-[#0e7490]"> Anmol</span>
            </h1>
            <h2 className="py-2">Unity Game Programmer & Developer</h2>
            <p className="py-4 sm:max-w-[70%] m-auto text-xl">
              I’m focused on building responsive games integrating back-end
              technologies.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/anmol07goyal/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-white text-xl rounded-full border border-gray-400 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/anmol20goyal?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-white text-xl rounded-full border border-gray-400 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <Link href="mailto:anmol77goyal@gmail.com">
                <div className="text-white text-xl rounded-full border border-gray-400 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
            </div>
            {/* resume download button */}
            <div className="py-3 justify-center flex">
              <button className="px-12 flex justify-center items-center bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300 ">
                <p className="mr-4 text-lg">
                  <a
                    href="https://drive.google.com/file/d/13aYpHmtiDrqAmMF6lQlsCKMATyc-pEb1/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                </p>
                <FaFileDownload className="text-white justify-center" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
