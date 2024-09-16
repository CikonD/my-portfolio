import React from "react";
import styles, { layout } from "../style";
import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = ({ icon, title, degree, duration, content1, content2 }) => (
  <motion.div
    className="flex flex-col p-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    whileInView={{ y: [-30, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
  >
    <div className="flex flex-row">
      <div className="w-[52px] h-[52px] rounded-full bg-dimBlue flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {title}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {degree}
        </p>
        <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">
          {duration}
        </p>
      </div>
    </div>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-4">
      {content1}
    </p>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-4">
      {content2}
    </p>
  </motion.div>
);

const Education = () => (
  <section id="education" className="bg-primary w-full overflow-hidden">
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <h2 className="text-white">Education</h2>
        <div className="flex flex-wrap">
          {educationList.map((edu) => (
            <FeatureCard key={edu.id} {...edu} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
