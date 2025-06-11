/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IosToggle = ({
  state,
  darkMode,
  onOffLabels,
  contrast,
  className,
}) => {
  return (
    <div
      className={`w-[51px] h-[31px] overflow-hidden rounded-2xl ${contrast === "on" && darkMode === "off" && ["off", "on-its-way"].includes(state) ? "bg-[#95959b]" : (contrast === "off" && darkMode === "on" && ["off", "on-its-way"].includes(state)) ? "bg-[#39393d]" : contrast === "on" && darkMode === "on" && ["off", "on-its-way"].includes(state) ? "bg-[#6f6f76]" : contrast === "off" && darkMode === "off" && ["off-its-way", "on"].includes(state) ? "bg-[#65c466]" : contrast === "on" && darkMode === "off" && ["on", "off-its-way"].includes(state) ? "bg-[#458846]" : contrast === "off" && darkMode === "on" && ["on", "off-its-way"].includes(state) ? "bg-[#67ce67]" : contrast === "on" && darkMode === "on" && ["on", "off-its-way"].includes(state) ? "bg-[#6cd86b]" : "bg-[#e9e9ea]"} ${onOffLabels === "on" && ["on", "off"].includes(state) ? "relative" : ""} ${className}`}
    >
      {onOffLabels === "on" && ["on", "off"].includes(state) && (
        <div
          className={`top-2.5 absolute ${state === "off" ? "border border-solid" : ""} ${contrast === "off" && state === "off" ? "border-[#b2b2b2]" : (state === "off" && contrast === "on") ? "border-white" : ""} ${state === "on" ? "w-px" : "w-[11px]"} ${state === "on" ? "left-[11px]" : "left-[33px]"} ${state === "on" ? "h-2.5" : "h-[11px]"} ${state === "off" ? "rounded-[5.5px]" : ""} ${state === "on" ? "bg-white" : ""}`}
        />
      )}

      <div
        className={`top-0.5 shadow-[0px_3px_7px_#0000001f] h-[27px] rounded-2xl bg-white ${["off-its-way", "on-its-way"].includes(state) ? "w-[34px]" : "w-[27px]"} ${state === "on" ? "left-[22px]" : (state === "off-its-way") ? "left-[15px]" : "left-0.5"} ${onOffLabels === "on" && ["on", "off"].includes(state) ? "absolute" : "relative"}`}
      />
    </div>
  );
};

IosToggle.propTypes = {
  state: PropTypes.oneOf(["on-its-way", "off-its-way", "off", "on"]),
  darkMode: PropTypes.oneOf(["off", "on"]),
  onOffLabels: PropTypes.oneOf(["off", "on"]),
  contrast: PropTypes.oneOf(["off", "on"]),
};
