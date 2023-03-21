import React from "react";

const Card = ({ children }) => {
  return (
    <div className="md:rounded-3xl md:py-24 py-6 bg-black px-8 md:px-40">
      {children}
    </div>
  );
};

export default Card;
