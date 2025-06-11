/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Avatar = ({ className }) => {
  return (
    <div
      className={`w-10 h-10 bg-[url(./static/img/subtract-3.png)] bg-cover bg-[50%_50%] ${className}`}
    >
      <div className="relative w-2 h-2 left-8 bg-lightcolorsgreen rounded" />
    </div>
  );
};
