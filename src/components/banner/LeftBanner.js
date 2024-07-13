import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  FaLinkedinIn, FaReact,  FaGithub } from "react-icons/fa";
import { SiTailwindcss,  SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kushagre Kaushik</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Pre Final year student at Thapar Institute of Engineering and Technology pursuing Bachelors of Technology in the field of Computer Engineering. Learning new skills and aspiring software developer.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {/* <span className="bannerIcon">
              <FaInstagram />
            </span> */}
            <span className="bannerIcon">
            <a href="https://github.com/Kushagrekaushik" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/kushagre-kaushik-2a6588243/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            {/* <span className="bannerIcon">
              <SiFigma />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner