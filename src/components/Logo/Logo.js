import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import Brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shawdow-2"
        options={{ max: 42 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={Brain} />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
