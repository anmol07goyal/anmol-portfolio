import React from "react";
import Link from "next/link";

const ProjectHeader = ({ codeLink, demoLink }) => {
  return (
    <>
      <Link href="/#projects" className="flex">
        <span>&lt;</span>
        <p className="underline cursor-pointer px-1"> Back</p>
      </Link>
      <div className="py-8">
        {/* <a
          href={codeLink}
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-2 mt-4 mr-8 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
            Code
          </button>
        </a> */}
        <a href={demoLink} target="_blank" rel="noreferrer">
          <button className="px-8 py-2 mt-4 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
            Demo
          </button>
        </a>
      </div>
    </>
  );
};

export default ProjectHeader;
