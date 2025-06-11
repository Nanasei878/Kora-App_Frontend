/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Button = ({
  className,
  frameClassName,
  divClassName,
  text = "+",
  textClassName,
  text1 = "Add Vacancy",
}) => {
  return (
    <div className={`w-[163px] h-[42px] ${className}`}>
      <div
        className={`flex w-[161px] items-center justify-center gap-1 px-6 py-[11px] relative left-px bg-bluenormal rounded-[100px] ${frameClassName}`}
      >
        <div
          className={`relative w-fit [font-family:'Font_Awesome_6_Pro-Solid',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap ${divClassName}`}
        >
          {text}
        </div>

        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Libre_Franklin',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap ${textClassName}`}
        >
          {text1}
        </div>
      </div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
