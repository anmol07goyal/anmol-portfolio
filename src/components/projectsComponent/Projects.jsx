"use client";
import React from "react";

import GameProjectsInfo from "./GameProjectsInfo";
import ProjectItem from "./ProjectItem";

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
          <ProjectItem project={GameProjectsInfo.Details.PhobiaVoyage} />
          <ProjectItem project={GameProjectsInfo.Details.PingPongMania} />
          <ProjectItem project={GameProjectsInfo.Details.SolarSystem} />
          <ProjectItem project={GameProjectsInfo.Details.CyberWar} />
          <ProjectItem project={GameProjectsInfo.Details.Learnfest} />
          <ProjectItem project={GameProjectsInfo.Details.SuperHeroRun} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
