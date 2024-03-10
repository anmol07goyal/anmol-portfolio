import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-auto px-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-xl uppercase py-4">Skills</h2>
        <div className="web-skills-section">
          {/* Game Engines & 3D Software */}
          <ul>
            <p>Game Engines & 3D Software</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Unity</li>
              <li>Blender</li>
            </div>
          </ul>

          {/* Version Control */}
          <ul>
            <p>Version Control</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Github</li>
              <li>Bitbucket</li>
            </div>
          </ul>

          {/* Multiplayer */}
          <ul>
            <p>Multiplayer</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Photon Plugins</li>
              <li>Unity Net-code</li>
            </div>
          </ul>

          {/* Work Management tools */}
          <ul>
            <p>Work Management Tools</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Jira</li>
              <li>Trello</li>
            </div>
          </ul>

          {/* AR/VR */}
          <ul>
            <p>AR/VR</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Vuforia Plugins</li>
              <li>AR Foundation</li>
              <li>Oculus Plugins</li>
            </div>
          </ul>

          {/* Coding language */}
          <ul>
            <p>Coding Languages</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>C#</li>
              <li>C++</li>
              <li>Python</li>
            </div>
          </ul>

          {/* Cloud technologies */}
          <ul>
            <p>Cloud Technologies</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Firebase</li>
              <li>Playfab</li>
              <li>Facebook APIs</li>
            </div>
          </ul>

          {/* Database integration */}
          <ul>
            <p>Database Integration</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>MongoDB</li>
              <li>Amazon S3</li>
            </div>
          </ul>

          {/* Platforms */}
          <ul>
            <p>Platforms</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Meta Quest2</li>
              <li>Android</li>
              <li>PC</li>
              <li>WebGL</li>
            </div>
          </ul>

          {/* Ad Integration */}
          <ul>
            <p>Ad Integration</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Facebook Ads</li>
              <li>Google Ads</li>
            </div>
          </ul>

          {/* Photo & video editing */}
          <ul>
            <p>Photo & Video Editing</p>
            <div className="bg-gray-50 rounded-b-xl">
              <li>Davinci Resolve</li>
              <li>Adobe Photoshop</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
