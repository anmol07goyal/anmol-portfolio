import React from "react";
import Image from "next/image";
import Link from "next/link";
import superHeroRunImg from "../../public/assets/projects/super-hero-run/thumbnail.png";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";
import ProjectHeader from "@/components/projectsComponent/ProjectHeader";

const superherorun = () => {
  const superHeroRun = GameProjectsInfo.Details.SuperHeroRun;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={superHeroRunImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{superHeroRun.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <ProjectHeader
            codeLink={superHeroRun.codeLink}
            demoLink={superHeroRun.demoLink}
          />

          <h2>Overview</h2>
          <p className="py-4 text-xl text-justify">{superHeroRun.shortDesc}</p>

          <div className="project-desc">
            <p>
              In the creation of Super Hero Run, a hyper-casual 3D runner game
              prototype, I took charge of all programming aspects, ensuring a
              dynamic and engaging gaming experience. My contributions included:
            </p>
            <ul>
              <li>
                <span>&#8226;</span>
                <b>AI Bot Diversity:</b>
                Engineered AI bots with diverse strengths, enhancing the
                competitiveness and unpredictability of gameplay.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Multi-Mechanic Dynamics:</b>
                Programmed seamless mechanics for flying, walking, and running,
                allowing players to effortlessly switch between characters based
                on obstacles encountered.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Real-Time Competition: </b>
                Implemented simultaneous competition with AI players,
                challenging users to prove their skills and adaptability in a
                dynamic gaming environment.
              </li>
            </ul>
            <p>
              This project, completed within a week, showcases not only my
              technical prowess in Unity programming but also my ability to
              rapidly prototype and deliver compelling gameplay mechanics. Super
              Hero Run is a testament to my commitment to crafting hyper-casual
              games that captivate players through innovation and excitement.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <Link href="/learnfest">
            <p className="underline cursor-pointer">Previous Project</p>
          </Link>
          <Link href="#" className="pointer-events-none">
            <p className="underline cursor-pointer  text-gray-400">
              Next Project
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default superherorun;
