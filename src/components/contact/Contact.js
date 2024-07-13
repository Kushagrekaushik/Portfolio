import React from 'react';
import Title from '../layouts/Title';
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-12">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center items-center">
          <img
            className="w-full max-h-[400px] object-cover rounded-lg mb-2"
            src={contactImg}
            alt="contactImg"
          />
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-3xl font-bold text-white">Kushagre Kaushik</h3>
            <p className="text-lg font-normal text-gray-400">
              MERN Stack Developer
            </p>
            <p className="text-base text-gray-400 flex items-center gap-2">
              Phone: <span className="text-lightText">+91 8872674973 </span>
            </p>
            <p className="text-base text-gray-400 flex items-center gap-2">
              Email: <span className="text-lightText">kushagrek@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
            <div className="flex gap-4">
              <a href="https://github.com/Kushagrekaushik" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kushagre-kaushik-2a6588243/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-base uppercase font-titleFont mb-4">Resume</h2>
            <div className="flex gap-4">
              <a href="https://drive.google.com/file/d/1d22asGC-iaVFqEpsukmPvCkiYS8XKHWo/view" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
