/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Bookmark = ({ className }) => {
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
        d="M16.5 1H4.2C2.43269 1 1 2.43269 1 4.2V19L6.79289 13.2071C7.18342 12.8166 7.81658 12.8166 8.20711 13.2071L14 19V3.375"
        stroke="#6C7C93"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        d="M19 10V11C19.5523 11 20 10.5523 20 10H19ZM15 3.57143C15 2.67681 15.6979 2 16.5 2V0C14.5406 0 13 1.62573 13 3.57143H15ZM16.5 2C17.3021 2 18 2.67681 18 3.57143H20C20 1.62573 18.4594 0 16.5 0V2ZM18 3.57143V10H20V3.57143H18ZM19 9H14V11H19V9Z"
        fill="#6C7C93"
      />

      <path d="M1 3V18L7.5 12L14 18.5V1H3L1 3Z" fill="#6C7C93" />
    </svg>
  );
};
