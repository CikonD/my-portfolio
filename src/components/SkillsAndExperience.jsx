import React from "react";
import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col">
      <span className="text-white text-[30px] hover:text-teal-200">
        {React.createElement(icon)}
      </span>
      <p className="font-poppins text-dimWhite text-[12px] mt-2">{name}</p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row">
        <img
          src={props.logo}
          alt={props.company}
          className="w-[52px] h-[52px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
            {props.company}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px]">
            {props.title}
          </p>
          <p className="font-poppins italic font-normal text-[14px] text-dimWhite my-1">
            {props.duration}
          </p>
        </div>
      </div>

      <div>
        {props.content.map((info) => {
          return (
            <p className="font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]">
              ● {info}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skillsAndExperience">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Skills & Experience
      </h1>

      <div className={`${layout.section} flex-col relative mb-4 mt-8`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          {experiences.map((card) => (
            <SkillCard key={card.id} {...card} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-poppins font-semibold text-[30px] text-white leading-[40px]">
          Technical Skills
        </h2>
        <div className="flex flex-wrap mt-8">
          {skills.map((skill) => (
            <div key={skill.id} className="mr-4 mb-4">
              <SkillIcon {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
