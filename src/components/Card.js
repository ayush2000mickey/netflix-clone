import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      {children}
    </div>
  );
};

export default Card;
