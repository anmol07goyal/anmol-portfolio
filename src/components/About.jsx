import React from "react";
import Image from "next/image";
import Link from "next/link";
import anmolPic from "../../public/assets/anmol-blur.png";

const About = () => {
  return (
    <div id="about" className="w-full h-auto px-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto">
        <h2 className="py-4 uppercase text-xl">About</h2>
        <div className=" md:grid grid-cols-3 gap-8">
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 bg-[#0e749068] max-w-[240px]">
            <Image
              src={anmolPic}
              className="rounded-xl sm:max-w-[240]"
              alt="/"
            />
          </div>
          <div className="col-span-2 py-4 lg:text-lg md:text-lg">
            <p>Greetings!</p>
            <p className="py-2 text-gray-600 text-justify">
              I&apos;m Anmol, a game developer with a dynamic journey. From solo
              coding in my room to collaborating with top-tier teams, my
              experience spans over three years. Armed with a Computer Science
              degree from Panjab University, I&apos;ve directed narrative-based
              games and embraced the immersive world of VR, notably with
              projects on Meta Quest 2.
            </p>
            <p className="py-2 text-gray-600 text-justify">
              My global perspective comes from graduating from a VR Production
              program in Canada. Eager for the next adventure, I&apos;m
              passionate about crafting impactful gaming experiences.
            </p>
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
