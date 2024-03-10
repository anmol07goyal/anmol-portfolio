"use client";
import React from "react";

import GameProjectsInfo from "./GameProjectsInfo";
import ProjectItem from "./ProjectItem";

import cyberWar from "../../../public/assets/projects/cyber-war/thumbnail.png";
import learnfest from "../../../public/assets/projects/learnfest/Learnfest-Thumbnail.png";
import pingPongMania from "../../../public/assets/projects/ping-pong-mania/thumbnail.png";
import phobiaVoyage from "../../../public/assets/projects/phobia-voyage/PV-Thumbnail.png";
import superHeroRun from "../../../public/assets/projects/super-hero-run/thumbnail.png";
import solarSystem from "../../../public/assets/projects/solar/thumbnail.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full md:h-auto px-2 flex items-center py-16 m-2"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="py-4 uppercase text-xl">Projects</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 mt-4">
          {/* Projects */}
          <ProjectItem
            project={GameProjectsInfo.Details.CyberWar}
            thumbnail={cyberWar}
            projectUrl="/cyberwar"
          />
          <ProjectItem
            project={GameProjectsInfo.Details.Learnfest}
            thumbnail={learnfest}
            projectUrl="/learnfest"
          />
          <ProjectItem
            project={GameProjectsInfo.Details.PingPongMania}
            thumbnail={pingPongMania}
            projectUrl="/pingpong"
          />
          <ProjectItem
            project={GameProjectsInfo.Details.SuperHeroRun}
            thumbnail={superHeroRun}
            projectUrl="/superherorun"
          />
          <ProjectItem
            project={GameProjectsInfo.Details.PhobiaVoyage}
            thumbnail={phobiaVoyage}
            projectUrl="/phobiavoyage"
          />
          <ProjectItem
            project={GameProjectsInfo.Details.SolarSystem}
            thumbnail={solarSystem}
            projectUrl="/solarsystem"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
