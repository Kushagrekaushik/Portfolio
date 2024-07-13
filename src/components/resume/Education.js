import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. Computer Engineering"
            subTitle="Thapar Institute of Engineering & Technology   (2021 - Present)"
            result="7.98/10"
            des="I am currently studying Computer Engineering at Thapar Institute of Engineering and Technology (TIET), focusing on developing skills in software development, algorithms, and systems design."
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="Indus Public School , Kharar (2019 - 2021)"
            result="91.8 % (12th CBSE Board)"
            des="I completed my senior secondary education at Indus Public School in Kharar, where I focused on advanced coursework in science and mathematics. This foundation prepared me for my current studies in Computer Engineering."
          />
          <ResumeCard
            title="Secondary Education"
            subTitle="Army Public School, Jalandhar Cantt (2005 - 2019)"
            result="89.4 % (10th CBSE Board)"
            des="I completed my secondary education up to the 10th grade at Army Public School in Jalandhar, focusing on a comprehensive curriculum that built a strong foundation for my future studies."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front End Developer"
            subTitle="CognifAI Health - (May 2023 -  Aug 2023)"
            result="Remote"
            des="Worked on the  official Website of the startup named as CognifAI Health as Web Developer. Tools used  - HTML, CSS, JavaScript, React.js"
          />
          <ResumeCard
            title="Thapar Satellite Program"
            subTitle="Web Developer - (March 2023 - May 2023)"
            result="TIET"
            des="I worked as a Web Developer for the Thapar Satellite Program, creating a responsive website for Thapar University’s successfully launched satellite. My tools included HTML, CSS, JavaScript, Python, and Django."
          />
          <ResumeCard
            title="Design Head "
            subTitle="Virsa Fest - (Sept 2023 - June 2023)"
            result="TIET"
            des="Managed and led a team of 200+ in Virsa fest which is one of the top fests of North India with a foot fall
of 8000+."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
