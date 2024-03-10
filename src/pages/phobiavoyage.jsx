import React from "react";
import Image from "next/image";
import Link from "next/link";
import phobiaVoyageImg from "../../public/assets/projects/phobia-voyage/PV-Thumbnail.png";
import phobiaVoyageCollage from "../../public/assets/projects/phobia-voyage/collage.png";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";

const phobiavoyage = () => {
  const phobiaVoyageProject = GameProjectsInfo.Details.PhobiaVoyage;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={phobiaVoyageImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{phobiaVoyageProject.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <Link href="/#projects" className="flex">
            <span>&lt;</span>
            <p className="underline cursor-pointer px-1"> Back</p>
          </Link>

          <div className="py-8">
            <a
              href="https://github.com/fireclint/property-finder"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
                Code
              </button>
            </a>
            <a
              href="https://property-finder-development.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
                Demo
              </button>
            </a>
          </div>

          <h2>Overview</h2>
          <p className="py-4 text-xl text-justify">
            {phobiaVoyageProject.shortDesc}
          </p>

          <div className="project-desc">
            <p>
              As a dedicated game programmer, I spearheaded various aspects to
              elevate the gameplay and player satisfaction.
            </p>
            <p>Key Contributions:</p>
            <ul>
              <li>
                <span>&#8226;</span>
                Integrated Oculus plugins in Unity for seamless VR experience.
              </li>
              <li>
                <span>&#8226;</span>
                Led gameplay programming, exceeding development goals by
                delivering 30% faster than the projected timeline.
              </li>
              <li>
                <span>&#8226;</span>
                Optimized and debugged the game, resulting in huge improvement
                in VR performance and an increase in player satisfaction.
              </li>
              <li>
                <span>&#8226;</span>
                Collaborated with art and design teams to enhance graphics,
                lighting, and overall visual quality by 20%.
              </li>
              <li>
                <span>&#8226;</span>
                Executed an advanced audio system, boosting player engagement by
                25%.
              </li>
              <li>
                <span>&#8226;</span>
                Developed complex game mechanics for VR, including rope
                climbing, crawling, and tunnel exploration.
              </li>
              <li>
                <span>&#8226;</span>
                Feedbacks - Successfully recorded and worked on the user
                feedbacks and finally improved the lighting and material
                qualities by huge margin.
              </li>
            </ul>
            <p>
              This project showcases my commitment to delivering immersive and
              high-quality gaming experiences and has been recognized by
              professors as an exemplary work to be showcased for incoming
              students.
            </p>
          </div>
        </div>

        <Image src={phobiaVoyageCollage} alt="/" />

        <div className="flex justify-between w-full">
          <Link href="/superherorun">
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

export default phobiavoyage;
