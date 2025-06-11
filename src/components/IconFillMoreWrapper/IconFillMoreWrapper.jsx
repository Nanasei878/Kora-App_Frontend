/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconFillMoreWrapper = ({
  className,
  iconFillMore = "/img/icon-fill-more-horizontal.svg",
}) => {
  return (
    <img
      className={`absolute w-6 h-6 top-0 left-0 ${className}`}
      alt="Icon fill more"
      src={iconFillMore}
    />
  );
};

IconFillMoreWrapper.propTypes = {
  iconFillMore: PropTypes.string,
};
