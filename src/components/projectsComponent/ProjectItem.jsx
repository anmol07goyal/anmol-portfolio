import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project }) => {
  const [showReadMore, setShowReadMore] = useState(false);
  console.log("hiii,  in projetc item");

  return (
    <div
      className="project relative"
      onMouseOver={() => setShowReadMore(true)}
      onMouseOut={() => setShowReadMore(false)}
    >
      <div
        className={`justify-center items-center flex max-w-full h-full ${
          showReadMore ? "opacity-50" : ""
        }`}
      >
        <Image
          src={project.thumbnail}
          alt={project.name}
          className="rounded-xl object-cover md:max-w-[240px] h-full opacity-90"
        />
      </div>
      <div className={`px-4 w-full h-full ${showReadMore ? "opacity-50" : ""}`}>
        <h3 className="mb-4 text-[20px] text-[#0e7490] items-start">
          {project.name}
        </h3>
        <p className="text-left">{project.shortDesc}</p>
      </div>
      {showReadMore && (
        <div
          hidden
          className="cursor-pointer w-full py-2 px-4 absolute justify-center items-center flex"
        >
          <div className="grid grid-rows-2 gap-12">
            <div className="text-center">
              {/* <a href={project.codeLink} target="_blank" rel="noreferrer">
                <button className="px-8 py-2 mr-8 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
                  Code
                </button>
              </a> */}
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <button className="px-8 py-2 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
                  Demo
                </button>
              </a>
            </div>
            <div className="flex justify-center">
              <Link
                className="rounded-full w-fit px-4 shadow-xl shadow-gray-300 font-bold bg-white text-black border-2 border-[#0e7490] flex items-center"
                href={project.projectUrl}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
