import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CHAT GPT CLONE"
          des=" The ChatGPT Clone project is a web application that mimics OpenAI's ChatGPT model, providing a user-friendly interface for interacting with a conversational AI. It utilizes React for the frontend interface and a Node.js backend to manage API requests to the ChatGPT API."
          src={"https://github.com/Kushagrekaushik/ChatGPT_Clone"}
        />
        <ProjectsCard
          title="College Manager"
          des=" The College Manager Project is a desktop application built with Python and Tkinter, aimed at simplifying administrative tasks and improving communication within an educational institution. It provides a user-friendly interface for managing student information, courses, schedules, and administrative operations."
          src={"https://github.com/Kushagrekaushik/College_Manager"}
        />
        <ProjectsCard
          title="Python Package for TOPSIS Analysis"
          des="TOPSIS-Py is a Python package designed for performing TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) analysis, a multi-criteria decision-making method. It helps users evaluate and rank alternatives based on their proximity to an ideal solution."
          src={"https://github.com/Kushagrekaushik/Topsis_package"}
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects