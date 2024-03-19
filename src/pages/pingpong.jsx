import React from "react";
import Image from "next/image";
import Link from "next/link";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";
import ProjectHeader from "@/components/projectsComponent/ProjectHeader";

const pingpong = () => {
  const pingPongManiaProject = GameProjectsInfo.Details.PingPongMania;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pingPongManiaProject.thumbnail}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{pingPongManiaProject.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <ProjectHeader
            codeLink={pingPongManiaProject.codeLink}
            demoLink={pingPongManiaProject.demoLink}
          />

          <h2>Overview</h2>
          <p className="py-4 text-xl text-justify">
            {pingPongManiaProject.shortDesc}
          </p>

          <div className="project-desc">
            <p>As a dedicated programmer, my responsibilities included:</p>
            <ul>
              <li>
                <span>&#8226;</span>
                Implementation of a versatile login system: guest login, Google,
                Facebook, and Apple.
              </li>
              <li>
                <span>&#8226;</span>
                Integration of multiple ad sources: AdMob, Facebook Ads, and
                IronSource for efficient ad management.
              </li>
              <li>
                <span>&#8226;</span>
                Dynamic reward system implementation to enhance user engagement.
              </li>
              <li>
                <span>&#8226;</span>
                Utilization of Photon for seamless synchronization of animations
                in multiplayer mode.
              </li>
              <li>
                <span>&#8226;</span>
                Integration of Firebase to streamline and manage various
                functionalities such as leaderboard, login system and share
                functionality.
              </li>
              <li>
                <span>&#8226;</span>
                Use of Facebook APIs to handle ads, share events and fetch
                profile features.
              </li>
              <li>
                <span>&#8226;</span>
                Creation of an effective monetization system through Unity IAPs.
              </li>
              <li>
                <span>&#8226;</span>
                Optimization of the game for smooth performance on lower-end
                devices, minimizing crash events.
              </li>
            </ul>

            <p>
              Experience the excitement of table tennis with our meticulously
              crafted game, where every aspect reflects a commitment to
              excellence.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <Link href="/phobiavoyage">
            <p className="underline cursor-pointer">Previous Project</p>
          </Link>
          <Link href="/solarsystem">
            <p className="underline cursor-pointer">Next Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default pingpong;
