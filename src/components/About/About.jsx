import React, { useState, useEffect, useRef } from "react";
import "./about.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import LeetCodeProfile from "../LeetCodeProfile/LeetCodeProfile";
import GithubProfile from "../GithubProfile/GithubProfile";
import Experince from "../Experince/Experince";

function About() {
  const [spanData, setSpanData] = useState(null);
  const [spanSkills, setSpanSkills] = useState([]);
  const [resume, setResume] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileIntro, setProfileIntro] = useState("");
  const [gitHubName, setGitHubName] = useState("");
  const [leetcodeName, setLeetCodeName] = useState("");
  const BaseUrl=import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${BaseUrl}show/profile`)
      .then((res) => res.json())
      .then((data) => {
        setSpanData(data.description);
        setSpanSkills(data.skills);
        setResume(data.resume);
        setProfileImg(data.profile_picture);
        setProfileName(data.name);
        setProfileIntro(data.intro);
        setGitHubName(data.gitHub_username);
        setLeetCodeName(data.leetcode_username);
      })
      .catch((e) => console.log(e));
  }, []);

  const [text] = useTypewriter({
    words: spanData,
    loop: true,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

 const skills = spanSkills.map((skill, index) => {
    return (
      <p className="text-white mb-6 inline-block text-2xl md:text-5xl" key={index}>
      {skill}
    </p>
    );
  });
  return (
    <>
      <div className="block-ele about_section max-w-full text-white">
        <div className="about-sm flex flex-col max-w-full lg:hidden">
          <div className="profile_img flex justify-center content-center w-full my-2">
            <div className=" h-40 w-40 overflow-hidden rounded-full align-middle">
              <img
                className="brightness-150 p_i"
                src={profileImg}
                alt="profile"
              />
            </div>
          </div>
          <div className="summary max-w-full flex flex-col text-center items-center">
            <h2 className="text-4xl">
              Hii, I am{" "}
              <span className="text-yellow-600 font-bold">{profileName}</span>
            </h2>
            <p className="text-2xl py-5">
              I'm a <span className="text-amber-500">{text}</span>
              <Cursor cursorColor="yellow" />
            </p>
            <p className="py-5 px-2 pintro text-left">{profileIntro}</p>
            <a href={resume} target="blanck" className="w-1/2 ">
              <button className="rounded-xl p-4 w-full bg-yellow-600 hover:bg-rose-700 scale-90 hover:scale-110">
                Resume
              </button>
            </a>
          </div>
        </div>

        <div className="block-ele about hidden gap-8 w-screen py-12 lg:flex">
          <div className="summary w-1/2 flex flex-col text-center sm:max-w-full">
            <h2 className="text-8xl">
              Hii, I am{" "}
              <span className="text-yellow-600 font-bold">{profileName}</span>
            </h2>
            <p className="text-3xl py-5">
              I'm a <span className="text-amber-500">{text}</span>
              <Cursor cursorColor="yellow" />
            </p>
            <p className="py-5 px-8 text-xl text-left">{profileIntro}</p>
            <div className="text-white flex justify-center content-center w-full mt-3">
              <a href={resume} target="blanck" className="w-1/2 ">
                <button className="rounded-xl p-4 w-full bg-yellow-600 hover:bg-rose-700 scale-90 hover:scale-110">
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div className="profile_img flex justify-center align-middle content-center w-1/2">
            <div className=" h-96 w-96 overflow-hidden rounded-full items-center">
              <img
                className="brightness-150 p_i"
                src={profileImg}
                alt="profile"
              />
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="skill_Slide">
            {skills}
          </div>
          <div className="skill_Slide">{skills}</div>
        </div>
      </div>
      <div className="block-ele mt-3">
        <Experince />
      </div>
      <div className="block-ele w-full flex flex-col md:flex-row lg:p-5">
        <div className="block-ele w-full lg:w-1/2 lg:p-3">
          <LeetCodeProfile name={leetcodeName}/>
        </div>
        <div className="block-ele w-full lg:w-1/2 lg:p-3">
          <GithubProfile name={gitHubName}/>
        </div>
      </div>
    </>
  );
}

export default About;
