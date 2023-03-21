import React from "react";

const Button = ({ buttonClass, children }) => {
  return (
    <button
      className={`w-full md:w-auto flex px-6 py-2 md:py-[14] rounded-md justify-center items-center md:text-lg font-['Manrope'] md:font-[Inter] font-light text-sm  md:mb-0 ${buttonClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
