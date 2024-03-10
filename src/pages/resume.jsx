import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFileDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const resume = () => {
  return (
    <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
      <div className="flex justify-between">
        <h2 className="items-center flex">Resume</h2>
        <button className="px-10 flex justify-center shadow-lg items-center text-black bg-[#d0d4d6] hover:scale-110 hover:bg-[#c0c0c0] ease-in duration-300 ">
          <p className="mr-4">
            <a
              href="https://drive.google.com/file/d/13aYpHmtiDrqAmMF6lQlsCKMATyc-pEb1/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </p>
          <FaFileDownload className="justify-center" />
        </button>
      </div>
      <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
        <h2 className="text-center">Anmol Goyal</h2>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/anmol07goyal/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
          </a>
          <a
            href="https://github.com/anmol20goyal?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} style={{ marginRight: "1rem" }} />
          </a>
          <a
            href="mailto:anmol77goyal@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail size={20} style={{ marginRight: "1rem" }} />
          </a>
        </div>
      </div>

      {/* Highlights of Qualifications */}
      <div className="border-b border-b-gray">
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <p className="uppercase">Highlights of Qualifications</p>
        </div>
        <div className="lg:text-[18px]">
          <ul className="resume-list pl-3">
            <li>
              <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                &#8226;
              </span>
              Experienced Unity game developer with 3 years of expertise in
              Android, WebGL, AR, VR (Meta Quest 2), and PC based games.
              Proficient in data structures, OOP concepts, and C# design
              patterns.
            </li>
            <li>
              <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                &#8226;
              </span>
              Languages : English | French (Basic) | Hindi | Punjabi
            </li>
          </ul>
        </div>
        <br />
      </div>

      {/* Virtual Reality Project */}
      <div className="border-b border-b-gray">
        <p className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          Virtual Reality Project
        </p>
        <div className="lg:text-[18px]">
          <div>
            <div className="hidden md:block">
              <div className="justify-between w-full flex font-bold">
                <p>Phobia Voyage VR, Capstone Project</p>
                <p className="text-gray-600">July 2023</p>
              </div>
            </div>
            <div className="block md:hidden">
              <p>
                <b>Phobia Voyage VR, Capstone Project </b>
              </p>
              <p className="text-gray-600">
                <i>July 2023</i>
              </p>
            </div>
          </div>

          <ul className="resume-list pl-3">
            <li>
              <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                &#8226;
              </span>
              Led gameplay programming efforts, providing a captivating player
              experience within a record-breaking development time of 30% faster
              than projected timeline.
            </li>
            <li>
              <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                &#8226;
              </span>
              Optimized and debugged game, resulting in a 25% improvement in VR
              performance, and a notable 40% increase in player satisfaction,
              revamping overall gaming experience.
            </li>
            <li>
              <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                &#8226;
              </span>
              Played a pivotal role in uplifting game's graphics and lighting,
              by cooperating with art and design teams, leading to a 20%
              enrichment in visual quality and contributing to a more immersive
              player experience.
            </li>
            <li>
              <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                &#8226;
              </span>
              Executed an advanced audio system, resulting in a 25% escalation
              in player engagement and positive reviews, upgrading overall
              auditory experience in game.
            </li>
          </ul>
        </div>
        <br />
      </div>

      {/* Publications */}
      <div className="border-b border-b-gray">
        <p className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          Publications
        </p>
        <div className="lg:text-[18px]">
          <p className="sm:flex">
            <Link
              href="https://play.google.com/store/apps/details?id=com.Seraphic.solAR&pcampaignid=web_share"
              target="_blank"
              className="items-center flex"
            >
              <u>solAR</u>
              <FaExternalLinkAlt className="px-1 text-2xl" />
            </Link>
            - Google Play Store, 500+ downloads
          </p>
          <p className="sm:flex">
            <Link
              href="https://assetlibrary.kompanions.com/3dadmin/learnfest#"
              target="_blank"
              className="items-center flex"
            >
              <u>Kompanions Learnfest</u>
              <FaExternalLinkAlt className="px-1 text-2xl" />
            </Link>
            - WebGL Application (Live)
          </p>
        </div>
        <br />
      </div>

      {/* Professional Experience */}
      <div className="border-b border-b-gray">
        <p className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          Professional Experience
        </p>
        <div className="lg:text-[18px]">
          {/* Inverse */}
          <div>
            <div>
              <div className="hidden md:block">
                <div className="justify-between w-full flex py-2">
                  <p>
                    <b>Unity Game Developer,</b> Inverse, UK (Remote)
                  </p>
                  <p className="font-bold text-gray-600">
                    March 2023 - Present
                  </p>
                </div>
              </div>
              <div className="block md:hidden py-2">
                <p className="py-1">
                  <b>Unity Game Developer,</b> Inverse, UK (Remote)
                </p>
                <p className="text-gray-600">
                  <i>March 2023 - Present</i>
                </p>
              </div>
            </div>
            <ul className="resume-list pl-3">
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Integrated and customized a chat system deploying Rocket-Chat
                APIs, facilitating a 40% refinement in user interactions through
                direct messages, public channels, and message retrieval for
                raising user interactions.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Implemented a dynamic game UI linked to server APIs, amplifying
                user experience across dashboard, chat, profiles, activity feed,
                and navigation.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Designed an in-game content editor for asset creation with
                dynamic move, scale, and rotate features, attaining 30% user
                efficiency. Integrated user-selected materials and a physics
                system for elevated customization and realism.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Optimized game for mobile phones, resulting in a 30% enhancement
                in overall gameplay smoothness.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Exercised project with a dynamic tech stack: Unity | C# | Visual
                Studio | Rocket Chat APIs | Rest APIs for optimal functionality.{" "}
              </li>
            </ul>
          </div>

          {/* Gemini Solutions */}
          <div className="pt-3">
            <div>
              <div className="hidden md:block">
                <div className="justify-between w-full flex pb-2">
                  <p>
                    <b>Software Developer - Unity Programmer,</b> Gemini
                    Solutions, Chandigarh, India
                  </p>
                  <p className="font-bold text-gray-600">
                    May 2022 - November 2022
                  </p>
                </div>
              </div>
              <div className="block md:hidden py-2">
                <p className="py-1">
                  <b>Software Developer - Unity Programmer,</b> Gemini
                  Solutions, Chandigarh, India
                </p>
                <p className="text-gray-600">
                  <i>May 2022 - November 2022</i>
                </p>
              </div>
            </div>

            <ul className="resume-list pl-3">
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Launched a 2D platformer game with a focus on cyber-security,
                earning 4.5 average user rating.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Engineered a user login system leveraging PlayFab, resulting in
                30% increase in player engagement and data retention.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Accomplished core gameplay mechanics, featuring a dynamic
                control and health system, resulting in a 25% reduction in
                player frustration and a substantial progress in overall
                gameplay experience.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Utilized MongoDB to create an efficient in-game chat,
                notifications and data save/load system, resulting in faster
                data retrieval and better player interaction.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Mentored three interns in game development, ensuring faster
                onboarding and strengthening team performance.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Empowered project with a dynamic tech stack: Unity | C# | Jet
                Brains Rider | PlayFab | MongoDB | Figma for optimal
                functionality.
              </li>
            </ul>
          </div>

          {/* Seraphic */}
          <div className="pt-3">
            <div>
              <div className="md:block hidden">
                <div className="justify-between w-full flex pb-2">
                  <p>
                    <b>Unity Developer,</b> Seraphic Info Solutions, Mohali,
                    India
                  </p>
                  <p className="font-bold text-gray-600">
                    July 2020 - June 2021
                  </p>
                </div>
              </div>
              <div className="block md:hidden py-2">
                <p className="py-1">
                  <b>Unity Developer,</b> Seraphic Info Solutions, Mohali, India
                </p>
                <p className="text-gray-600">
                  <i>July 2020 - June 2021</i>
                </p>
              </div>
            </div>

            <ul className="resume-list pl-3">
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Spearheaded development of multiplayer feature for 2D table
                tennis game, 'Ping Pong Mania,' resulting in a 40% increase in
                player engagement and a doubling of concurrent user
                interactions.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Achieved seamless synchronization of spine animations over
                network, resulting in a 25% reduction in latency and ensuring a
                smooth, immersive gaming experience for players.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Orchestrated integration of login system and ad network through
                Google and Facebook, expanding user base by more than 50% and
                increased revenue by 30%.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Engineered a dynamic 3D hyper-casual runner prototype with
                on-the-fly character customization, driving a 25% surge in user
                engagement. Introduced diverse bot characters, boosting gameplay
                and extending player retention by 20%.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Developed an immersive AR application on solar system leveraging
                Vuforia plugins, resulting in a 25% increase in user engagement
                and delivering an enriching educational experience.
              </li>
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Employed projects with a dynamic tech stack: Unity | C# | Rider
                | Vuforia Plugins | Ads Integration | Firebase | Photon (PUN) |
                Unity IAPs for optimal functionality.
              </li>
            </ul>
          </div>
        </div>
        <br />
      </div>

      {/* Education */}
      <div className="border-b border-b-gray">
        <p className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          Education
        </p>
        <div className="lg:text-[18px]">
          {/* Diploma, CA */}
          <div className="pb-2">
            <div>
              <div className="hidden md:block">
                <div className="justify-between w-full flex">
                  <p>
                    <b>Diploma in Virtual Reality Production,</b> Conestoga
                    College, Kitchener, Ontario, CA
                  </p>
                  <p className="font-bold">August 2023</p>
                </div>
              </div>
              <div className="block md:hidden">
                <p className="py-1">
                  <b>Diploma in Virtual Reality Production,</b> Conestoga
                  College, Kitchener, Ontario, CA
                </p>
                <p className="text-gray-600">
                  <i>August 2023</i>
                </p>
              </div>
            </div>

            <p className="py-1 text-gray-600">
              <i>Batch of 2023</i>
            </p>
            <ul className="resume-list pl-3">
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                Developed a captivating Unity VR Horror Game as a Capstone
                project, spotlighted as an educational example for next intake
                of students.
              </li>
            </ul>
          </div>

          {/* Bachelor, India */}
          <div>
            <div>
              <div className="hidden md:block">
                <div className="justify-between w-full flex">
                  <p>
                    <b>Bachelor of Engineering in Computer Science,</b> Panjab
                    University, Chandigarh, India
                  </p>
                  <p className="font-bold">August 2022</p>
                </div>
              </div>
              <div className="block md:hidden">
                <p className="py-1">
                  <b>Bachelor of Engineering in Computer Science,</b> Panjab
                  University, Chandigarh, India
                </p>
                <p className="text-gray-600">
                  <i>August 2022</i>
                </p>
              </div>
            </div>

            <p className="py-1 text-gray-600">
              <i>Batch of 2018</i>
            </p>
            <ul className="resume-list pl-3">
              <li>
                <span className=" absolute text-3xl left-0 top-2 transform -translate-y-1/2">
                  &#8226;
                </span>
                CGPA: 7.9 / 10
              </li>
            </ul>
          </div>
        </div>
        <br />
      </div>

      {/* Technical Skills */}
      <div className="border-b border-b-gray">
        <p className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          Technical Skills
        </p>
        <div className="lg:text-[18px]">
          <p>
            <b className="text-gray-600">3D Software & Game Engines:</b> Unity,
            Blender
          </p>
          <p>
            <b className="text-gray-600">Version Control:</b> Git, Github,
            BitBucket
          </p>
          <p>
            <b className="text-gray-600">Multiplayer:</b> Photon Plugins, Unity
            Net-code
          </p>
          <p>
            <b className="text-gray-600">Work Management Tools:</b> Jira, Trello
          </p>
          <p>
            <b className="text-gray-600">AR/VR:</b> Vuforia Plugins, AR
            Foundation, Oculus Plugins
          </p>
          <p>
            <b className="text-gray-600">Coding Languages:</b> C#, C++, Python
          </p>
          <p>
            <b className="text-gray-600">Cloud Technologies:</b> Firebase,
            PlayFab
          </p>
          <p>
            <b className="text-gray-600">Database Integration:</b> MongoDB,
            Amazon S3
          </p>
          <p>
            <b className="text-gray-600">Platforms:</b> Meta Quest2, Android,
            PC, WebGL
          </p>
          <p>
            <b className="text-gray-600">Ad Integration:</b> Facebook Ads,
            Google Ads
          </p>
          <p>
            <b className="text-gray-600">Photo & Video Editing:</b> Davinci
            Resolve, Adobe Photoshop
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default resume;
