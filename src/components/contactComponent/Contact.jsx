"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import anmolPic from "../../../public/assets/anmol-blur.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-auto px-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-auto">
        <h2 className="text-xl uppercase py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 lg:text-lg md:text-lg">
            <div className="lg:p-4 h-full">
              <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 bg-[#0e749068] max-w-[240px]">
                <Image
                  src={anmolPic}
                  className="rounded-xl sm:max-w-[240]"
                  alt="/"
                />
              </div>
              <div className="">
                <h2 className="py-2 mt-2 text-2xl flex justify-center items-center">
                  Anmol Goyal
                </h2>
                <p className="flex justify-center items-center ">
                  Game Programmer
                </p>
                <p className="flex p-4 justify-center items-center text-center">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>

              <div className="flex justify-center items-end mt-[10%] md:mt-[20%] lg:mt-[30%]">
                <div className="w-[80%] md:w-[60%] justify-center items-center">
                  <p className="uppercase flex justify-center">
                    Connect With Me
                  </p>
                  <div className="flex items-center justify-between my-4 ">
                    <a
                      href="https://www.linkedin.com/in/anmol07goyal/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="text-xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#0e7490] text-white">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/anmol20goyal?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="text-xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300  bg-[#0e7490] text-white">
                        <FaGithub />
                      </div>
                    </a>
                    <Link href="mailto:anmol77goyal@gmail.com">
                      <div className="text-xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300  bg-[#0e7490] text-white">
                        <AiOutlineMail />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <ContactForm />
          </div>
          <div className="py-6 px-2 fixed bottom-0 right-0">
            <Link href="/">
              <IoIosArrowDropupCircle
                className="shadow-lg shadow-gray-400 rounded-full text-[#0e7490] cursor-pointer hover:scale-110 ease-in duration-300"
                size={45}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
