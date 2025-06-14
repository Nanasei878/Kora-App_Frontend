/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Dashboard = ({ color = "#585757", className }) => {
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
        d="M0 1C0 0.447715 0.447715 0 1 0H12C12.5523 0 13 0.447715 13 1V10C13 10.5523 12.5523 11 12 11H1C0.447715 11 0 10.5523 0 10V1Z"
        fill={color}
      />

      <path
        d="M15 1C15 0.447715 15.4477 0 16 0H19C19.5523 0 20 0.447715 20 1V10C20 10.5523 19.5523 11 19 11H16C15.4477 11 15 10.5523 15 10V1Z"
        fill={color}
      />

      <path
        d="M20 19C20 19.5523 19.5523 20 19 20L8 20C7.44772 20 7 19.5523 7 19L7 14C7 13.4477 7.44772 13 8 13L19 13C19.5523 13 20 13.4477 20 14V19Z"
        fill={color}
      />

      <path
        d="M5 19C5 19.5523 4.55228 20 4 20H1C0.447715 20 3.91405e-08 19.5523 8.74228e-08 19L6.99382e-07 14C7.47665e-07 13.4477 0.447716 13 1 13H4C4.55229 13 5 13.4477 5 14L5 19Z"
        fill={color}
      />
    </svg>
  );
};

Dashboard.propTypes = {
  color: PropTypes.string,
};
