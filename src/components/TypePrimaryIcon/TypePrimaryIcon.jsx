/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypePrimaryIcon = ({
  className,
  divClassName,
  text = "Label",
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 px-4 py-[9px] relative bg-brand-500 rounded ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] font-headline-300 font-[number:var(--headline-300-font-weight)] text-primaryneutral-0 text-[length:var(--headline-300-font-size)] text-center tracking-[var(--headline-300-letter-spacing)] leading-[var(--headline-300-line-height)] whitespace-nowrap [font-style:var(--headline-300-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

TypePrimaryIcon.propTypes = {
  text: PropTypes.string,
};
