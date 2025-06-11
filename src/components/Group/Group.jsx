/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group = ({ className, icSearch = "/img/ic-search.svg", icChat = "/img/ic-chat.svg" }) => {
  return (
    <div className={`relative w-[766px] h-[65px] ${className}`}>
      <div className="absolute w-[511px] h-14 top-[9px] left-0">
        <div className="relative w-[509px] h-14 bg-[#e3e3e3] rounded-[82px]">
          <img className="absolute w-7 h-7 top-3.5 left-[448px]" alt="Ic search" src={icSearch} />
          <input
  className="absolute top-4 left-9 [font-family:'Poppins',Helvetica] font-normal text-[#757575] text-base tracking-[0] leading-[normal] border-none"
  placeholder="Cherchez quelque chose ici..."
/>
        </div>
      </div>
      <div className="left-[705px] absolute w-[61px] h-[65px] top-0">
        <div className="relative w-[63px] h-[65px]">
          <div className="absolute w-14 h-14 top-[9px] left-0 bg-white rounded-[49px]" />
          <img className="absolute w-7 h-7 top-[23px] left-3.5" alt="Ic bell" src="/img/ic-bell.svg" />
          <div className="absolute w-7 h-[26px] top-0 left-[35px]">
            <div className="relative w-[26px] h-[26px] bg-[#005dff] rounded-[13px] shadow-[0px_6px_8px_#8643df5e]">
              <div className="absolute top-[3px] left-1 [font-family:'Poppins',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                52
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-[605px] absolute w-[61px] h-[65px] top-0">
        <div className="relative w-[63px] h-[65px]">
          <div className="absolute w-14 h-14 top-[9px] left-0 bg-white rounded-[49px]" />
          <img className="absolute w-7 h-7 top-[23px] left-3.5" alt="Ic chat" src={icChat} />
          <div className="absolute w-7 h-[26px] top-0 left-[35px]">
            <div className="relative w-[26px] h-[26px] bg-[#005dff] rounded-[13px] shadow-[0px_6px_8px_#8643df5e]">
              <div className="absolute top-[3px] left-1.5 [font-family:'Poppins',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                18
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Group.propTypes = {
  icSearch: PropTypes.string,
  icChat: PropTypes.string,
};
