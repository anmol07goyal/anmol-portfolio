import React from "react";
import Image from "next/image";
import Link from "next/link";
import learnfestImg from "../../public/assets/projects/learnfest/Learnfest-Thumbnail.png";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";
import ProjectHeader from "@/components/projectsComponent/ProjectHeader";

const learnfest = () => {
  const learnfestProject = GameProjectsInfo.Details.Learnfest;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={learnfestImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{learnfestProject.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <ProjectHeader
            codeLink={learnfestProject.codeLink}
            demoLink={learnfestProject.demoLink}
          />

          <h2>Overview</h2>
          <p className="py-4 text-xl text-justify">
            {learnfestProject.shortDesc}
          </p>

          <div className="project-desc">
            <p>
              I oversaw the programming for LearnFest, a web-based learning
              application, with an emphasis on presenting educational content
              using cutting-edge 2D and 3D simulations. Among my main
              contributions are:
            </p>
            <ul>
              <li>
                <span>&#8226;</span>
                <b>Extensive Simulations:</b>
                80–100 interactive simulations covering a broad range of topics,
                including science, math, and more, were developed to create an
                immersive and captivating learning environment.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Cross-Subject Expertise: </b>
                Participated in simulations spanning a range of academic levels
                and subjects, guaranteeing a thorough and inclusive learning
                environment.
              </li>
              <li>
                <span>&#8226;</span>
                <b>WebGL Integration: </b>
                By utilising Unity, WebGL technology was smoothly integrated,
                allowing students to access simulations straight from their web
                browsers and promoting convenience and accessibility.
              </li>
            </ul>
            <p>
              LearnFest is evidence of my dedication to creating educational
              games and shows how interactive simulations can help students of
              all skill levels understand and enjoy difficult subjects.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <Link href="/cyberwar">
            <p className="underline cursor-pointer">Previous Project</p>
          </Link>
          <Link href="/superherorun">
            <p className="underline cursor-pointer">Next Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default learnfest;
