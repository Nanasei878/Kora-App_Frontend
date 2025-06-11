/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Notification = ({ color = "#585757", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.13459 1.42432L7.70057 1.18176C9.46141 0.427111 11.4546 0.427112 13.2154 1.18176L13.7814 1.42432C16.0119 2.38022 17.458 4.57337 17.458 7V8.93628C17.458 10.6037 17.979 12.2294 18.9481 13.5862L19.958 15H0.958008L1.96788 13.5862C2.93702 12.2294 3.45801 10.6037 3.45801 8.93628V7C3.45801 4.57337 4.90416 2.38022 7.13459 1.42432Z"
        fill={color}
        stroke={color}
        strokeLinejoin="round"
      />

      <path
        d="M7.45801 18.75C7.45801 18.0596 8.01765 17.5 8.70801 17.5H12.208C12.8984 17.5 13.458 18.0596 13.458 18.75C13.458 19.4404 12.8984 20 12.208 20H8.70801C8.01765 20 7.45801 19.4404 7.45801 18.75Z"
        fill={color}
      />
    </svg>
  );
};

Notification.propTypes = {
  color: PropTypes.string,
};
