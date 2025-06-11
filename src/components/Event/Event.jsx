/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Event = ({
  className,
  timeClassName,
  text = "HR Team Meeting",
  text1 = "08.30 AM",
}) => {
  return (
    <div
      className={`w-[187px] h-[140px] bg-[#eef4fe] rounded-2xl ${className}`}
    >
      <div className="inline-flex flex-col items-start gap-2 relative top-4 left-4">
        <div className="relative w-[155px] mt-[-1.00px] [font-family:'Libre_Franklin',Helvetica] font-semibold text-[#17243e] text-base tracking-[0] leading-[normal]">
          {text}
        </div>

        <div
          className={`relative w-fit [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-[13px] text-center tracking-[0] leading-[normal] ${timeClassName}`}
        >
          {text1}
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
