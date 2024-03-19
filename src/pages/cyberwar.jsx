import React from "react";
import Image from "next/image";
import Link from "next/link";
import cyberWarCollage from "../../public/assets/projects/cyber-war/collage.png";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";
import ProjectHeader from "@/components/projectsComponent/ProjectHeader";

const cyberwar = () => {
  const cyberWarProject = GameProjectsInfo.Details.CyberWar;
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cyberWarProject.thumbnail}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{cyberWarProject.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <ProjectHeader
            codeLink={cyberWarProject.codeLink}
            demoLink={cyberWarProject.demoLink}
          />

          <h2>Overview</h2>
          <p className="py-4 text-xl text-justify">
            {cyberWarProject.shortDesc}
          </p>

          <div className="project-desc">
            <p>
              In my role as a game programmer for a 2D platformer game centered
              around cybersecurity, I spearheaded various programming
              initiatives to ensure a seamless and engaging player experience.
              Notable contributions include::
            </p>
            <ul>
              <li>
                <span>&#8226;</span>
                <b>MongoDB Integration:</b>
                Implemented a public general chat system using MongoDB,
                enhancing social interaction within the game environment.
              </li>
              <li>
                <span>&#8226;</span>
                <b>PlayFab User Login: </b>
                Orchestrated the development of a robust user login system using
                PlayFab, ensuring secure access and personalized experiences.
              </li>
              <li>
                <span>&#8226;</span>
                <b>REST API Utilization: </b>
                Leveraged REST APIs to seamlessly retrieve company user data and
                facilitate user registration in PlayFab.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Gameplay Systems: </b>
                Developed comprehensive gameplay systems, including health
                dynamics (degeneration and regeneration) and in-game
                notifications for the chat system.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Social Features: </b>
                Introduced challenge and poke systems between users, fostering a
                competitive and interactive gaming community.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Leaderboard Implementation: </b>
                Integrated a leaderboard system to recognize and celebrate
                player achievements.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Optimization: </b>
                Executed optimization strategies for the entire gameplay
                experience, ensuring smooth performance.
              </li>
              <li>
                <span>&#8226;</span>
                <b>Mentorship: </b>
                Provided guidance and mentorship to new interns, sharing
                insights into Unity game development.
              </li>
            </ul>

            <p>
              This cyberwar platformer game in Unity reflects my commitment to
              delivering technically intricate and engaging gaming experiences
              in the realm of cybersecurity.
            </p>
          </div>
        </div>

        <Image src={cyberWarCollage} alt="/" />

        <div className="flex justify-between w-full">
          <Link href="/solarsystem">
            <p className="underline cursor-pointe">Previous Project</p>
          </Link>
          <Link href="/learnfest">
            <p className="underline cursor-pointer">Next Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cyberwar;
