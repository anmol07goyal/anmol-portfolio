import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { Roboto_Condensed } from "next/font/google";
import { useRouter } from "next/router";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleSideNavbar = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (router.asPath === "/project") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed top-0 w-full h-16 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed top-0 w-full h-16 z-[100]"
      }
    >
      <div className="flex justify-start items-center w-full h-full px-2">
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex xl:ml-[48%] ease-in duration-300"
          >
            <li className="text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[rgb(14,116,144)]">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleSideNavbar} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-10 ease-in duration-500 overflow-auto"
              : "fixed left-[-100%] top-0 p-10"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mb-[10%]">
              <h2
                className={`${roboto_condensed.className} text-3xl uppercase tracking-tighter`}
              >
                Anmol Goyal
              </h2>
              <div
                onClick={handleSideNavbar}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
                >
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li
                  onClick={() => setNav(false)}
                  className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
                >
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-[30%] h-auto">
              <p className="uppercase tracking-widest text-[#2f347a]">
                Let&#39;s Connect
              </p>
              <div className="flex justify-center items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between my-4 ">
                    <a
                      href="https://www.linkedin.com/in/anmol07goyal/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/anmol20goyal?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>
                    <Link href="mailto:anmol77goyal@gmail.com">
                      <div
                        onClick={() => setNav(!nav)}
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                      >
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
