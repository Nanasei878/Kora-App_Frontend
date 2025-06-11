/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowSmallDown2 = ({ color = "#6C7C93", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9325 7H11.0675C10.6436 7 10.412 7.49443 10.6834 7.82009L14.6159 12.5391C14.8158 12.7789 15.1842 12.7789 15.3841 12.5391L19.3166 7.82009C19.588 7.49443 19.3564 7 18.9325 7Z"
        fill={color}
        stroke={color}
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowSmallDown2.propTypes = {
  color: PropTypes.string,
};
