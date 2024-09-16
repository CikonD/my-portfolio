import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Button = ({ styles, text, icon }) => (
  <button className={`py-4 px-6 bg-blue-600 rounded-lg ${styles}`}>
    {icon === "AiFillGithub" && <AiFillGithub className="inline mr-2" />}
    {text}
  </button>
);

export default Button;
