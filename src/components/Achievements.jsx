import React from "react";
import { achievements } from "../constants";
import styles from "../style";

const Achievements = () => (
  <section className={`${styles.flexCenter} flex-col sm:mb-20 mb-6`}>
    <h2 className="font-poppins font-semibold text-[32px] text-white mb-6">
      Achievements
    </h2>
    {achievements.map((achievement) => (
      <div
        key={achievement.id}
        className={`flex flex-col justify-start items-start m-3 p-4 bg-gray-800 rounded-lg`}
      >
        <h3 className="font-poppins font-semibold text-[24px] text-white">
          {achievement.title}
        </h3>
        <p className="font-poppins font-normal text-[16px] text-dimWhite mt-2">
          {achievement.date}
        </p>
        <p className="font-poppins font-normal text-[16px] text-dimWhite mt-2">
          {achievement.description}
        </p>
      </div>
    ))}
  </section>
);

export default Achievements;
