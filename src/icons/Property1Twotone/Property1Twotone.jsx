/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Twotone = ({ opacity = "unset", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.3999 2.09998H18.5999C19.6999 2.09998 20.5999 2.99998 20.5999 4.09998V6.29998C20.5999 7.09998 20.0999 8.09998 19.5999 8.59998L15.2999 12.4C14.6999 12.9 14.2999 13.9 14.2999 14.7V19C14.2999 19.6 13.8999 20.4 13.3999 20.7L11.9999 21.6C10.6999 22.4 8.8999 21.5 8.8999 19.9V14.6C8.8999 13.9 8.4999 13 8.0999 12.5L4.2999 8.49998C3.7999 7.99998 3.3999 7.09998 3.3999 6.49998V4.19998C3.3999 2.99998 4.2999 2.09998 5.3999 2.09998Z"
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />

      <path
        d="M10.93 2.09998L6 9.99998"
        opacity={opacity}
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />

      <g opacity="0" />
    </svg>
  );
};

Property1Twotone.propTypes = {
  opacity: PropTypes.string,
};
