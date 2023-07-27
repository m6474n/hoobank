import React from "react";
import styles from "../styles";

const Button = ({ style }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient rounded font-poppins font-medium text-[18px] text-primary outline-none ${style} `}
    >
      Get Started
    </button>
  );
};

export default Button;
