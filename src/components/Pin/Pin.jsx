/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Pin = ({ className, subtract = "/img/subtract-6.svg" }) => {
  return (
    <div className={`w-5 h-5 ${className}`}>
      <div className="relative w-[19px] h-[19px] top-px">
        <img
          className="absolute w-[17px] h-[17px] top-0 left-0.5"
          alt="Subtract"
          src={subtract}
        />

        <img
          className="absolute w-2 h-2 top-2.5 left-0"
          alt="Vector"
          src="/img/vector-70.svg"
        />
      </div>
    </div>
  );
};

Pin.propTypes = {
  subtract: PropTypes.string,
};
