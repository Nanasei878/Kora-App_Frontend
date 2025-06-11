/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ButtonSmall = ({
  className,
  textClassName,
  text = "All Activity",
}) => {
  return (
    <div className={`w-[99px] h-[30px] ${className}`}>
      <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1.5 relative top-px bg-greenlight rounded-[100px]">
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Libre_Franklin',Helvetica] font-medium text-[#23272c] text-sm tracking-[0] leading-[normal] ${textClassName}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

ButtonSmall.propTypes = {
  text: PropTypes.string,
};
