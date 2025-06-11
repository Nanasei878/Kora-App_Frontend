import React from "react";
import { ChevronDownWrapper } from "../../components/ChevronDownWrapper";
import { Group } from "../../components/Group";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { Course } from "../../icons/Course";

export const DtailsDeLa = () => {
  return (
    <div className="relative w-[1920px] h-[1225px] bg-[#ffffff] overflow-hidden">
      <img
        className="absolute w-[95px] h-[21px] top-[-2467px] left-[-2087px]"
        alt="Vector"
        src="/img/vector.svg"
      />

      <div className="absolute w-[1920px] h-[1676px] top-0 left-0">
        <div className="absolute w-[1920px] h-[1676px] top-0 left-0">
          <div className="relative h-[1676px]">
            <div className="absolute w-[1920px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm" />

            <div className="absolute w-[1575px] h-[1578px] top-[98px] left-[345px] bg-[#f2f2f2] rounded-[0px_0px_0px_38px]" />

            <div className="absolute w-[1575px] h-[120px] top-0 left-[345px]">
              <div className="relative h-[120px] bg-[#f2f2f2]">
                <Group
                  className="!absolute !left-[510px] !top-[23px]"
                  icChat="/img/ic-chat-1.svg"
                  icSearch="/img/ic-search-1.svg"
                />
                <div className="absolute w-[400px] h-[42px] top-[39px] left-[50px]">
                  <div className="absolute top-0 left-[74px] [font-family:'Poppins',Helvetica] font-semibold text-[#000000] text-[28px] tracking-[0] leading-[normal]">
                    Détails de la formation
                  </div>

                  <img
                    className="absolute w-[29px] h-[18px] top-3 left-0"
                    alt="Ic menu"
                    src="/img/ic-menu.png"
                  />
                </div>

                <div className="absolute w-[182px] h-[57px] top-[31px] left-[1340px]">
                  <div className="absolute top-[5px] left-[88px] [font-family:'Poppins',Helvetica] font-semibold text-[#000000] text-base tracking-[0] leading-[normal]">
                    Israël SILUE
                  </div>

                  <div className="absolute top-[34px] left-[88px] [font-family:'Poppins',Helvetica] font-normal text-[#8f8f8f] text-xs tracking-[0] leading-[normal]">
                    Talents
                  </div>

                  <div className="absolute w-[57px] h-[57px] top-0 left-0 bg-[#c4c4c4] rounded-[65px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[1488px] h-[1204px] items-start absolute top-32 left-[395px] bg-[#242627]">
          <div className="flex flex-col w-[979px] items-start gap-6 p-8 relative self-stretch bg-[#f7f7f7] border-r [border-right-style:solid] border-[#f3f3f3]">
            <div className="flex items-center gap-3 w-full flex-[0_0_auto] relative self-stretch">
              <ChevronLeft1 className="!relative !w-9 !h-9" color="#202226" />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-2xl tracking-[0] leading-9">
                Basic UI/UX Designer
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] mb-[-455.00px]">
              <div className="flex flex-col h-[486px] items-start justify-end p-6 relative self-stretch w-full bg-[#c4c4c4] rounded-xl overflow-hidden">
                <div className="relative flex-[0_0_auto]" />

                <img
                  className="absolute w-16 h-16 top-[210px] left-[425px]"
                  alt="Play button"
                  src="/img/play-button-1-1.svg"
                />

                <div className="flex items-center gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-[50.47px] h-[30.74px] bg-[#202226] rounded-md">
                    <img
                      className="absolute w-[15px] h-[15px] top-2 left-[18px]"
                      alt="Play"
                      src="/img/play.svg"
                    />
                  </div>

                  <div className="relative flex-1 grow h-[24.97px] bg-[#202226] rounded-sm">
                    <div className="absolute w-[683px] h-[9px] top-2 left-[9px] border border-solid border-vimeo-grey">
                      <div className="absolute w-[85px] h-1.5 top-px left-px bg-vimeo-grey" />

                      <div className="absolute w-[21px] h-1.5 top-px left-px bg-blue-4" />
                    </div>

                    <div className="absolute w-[91px] h-3 top-1.5 left-[708px]">
                      <div className="absolute w-[17px] h-[9px] top-0.5 left-0">
                        <div className="absolute w-[3px] h-[5px] top-[5px] left-0 bg-blue-4" />

                        <div className="h-1.5 top-[3px] left-[5px] absolute w-[3px] bg-blue-4" />

                        <div className="h-2 top-0.5 left-[9px] absolute w-[3px] bg-blue-4" />

                        <div className="h-[9px] top-0 left-3.5 absolute w-[3px] bg-blue-4" />
                      </div>

                      <img
                        className="absolute w-[11px] h-[9px] top-0.5 left-[79px]"
                        alt="Full screeen"
                        src="/img/full-screeen.svg"
                      />

                      <img
                        className="absolute w-3.5 h-3 top-0 left-14"
                        alt="Settings icon"
                        src="/img/settings-icon.svg"
                      />

                      <img
                        className="absolute w-[19px] h-[11px] top-px left-[27px]"
                        alt="Cc icon"
                        src="/img/cc-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-col items-start justify-end gap-2 flex relative self-stretch w-full flex-[0_0_auto]">
                <p className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-neutralblack text-2xl tracking-[0] leading-[30px] relative self-stretch">
                  Playstation Kicks Off New Year With Increased Supply Of Ps5
                  Consoles, New&nbsp;&nbsp;Spot
                </p>

                <div className="justify-between self-stretch w-full flex-[0_0_auto] flex items-center relative">
                  <div className="inline-flex items-center gap-2 relative self-stretch flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-transparent text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                      <span className="text-[#8c8c8c]">by</span>

                      <span className="text-[#161616]"> Tony John </span>
                    </p>

                    <img
                      className="relative w-[20.4px] h-px object-cover"
                      alt="Line"
                      src="/img/line-1.svg"
                    />

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-neutralblack text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                        Oct 12, 2023
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-4 relative self-stretch flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <img
                        className="relative w-5 h-5"
                        alt="Message square"
                        src="/img/message-square.svg"
                      />

                      <div className="relative w-fit mt-[-1.00px] font-caption-sans-semibold-02 text-on-surface leading-[var(--caption-sans-semibold-02-line-height)] whitespace-nowrap font-[number:var(--caption-sans-semibold-02-font-weight)] text-[length:var(--caption-sans-semibold-02-font-size)] tracking-[var(--caption-sans-semibold-02-letter-spacing)] [font-style:var(--caption-sans-semibold-02-font-style)]">
                        12
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <img
                        className="relative w-5 h-5"
                        alt="Eye"
                        src="/img/eye.svg"
                      />

                      <div className="relative w-fit mt-[-1.00px] font-caption-sans-semibold-02 font-[number:var(--caption-sans-semibold-02-font-weight)] text-on-surface text-[length:var(--caption-sans-semibold-02-font-size)] tracking-[var(--caption-sans-semibold-02-letter-spacing)] leading-[var(--caption-sans-semibold-02-line-height)] whitespace-nowrap [font-style:var(--caption-sans-semibold-02-font-style)]">
                        260.2K
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-6 p-7 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl border border-solid border-[#f3f3f3]">
                  <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#828282] text-sm tracking-[0] leading-[22px]">
                      Section 1 - Introductions
                    </div>

                    <ChevronDown1 className="!relative !w-6 !h-6" />
                  </div>

                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl">
                      <div className="relative w-[22px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                        01
                      </div>

                      <div className="items-start gap-0.5 flex-1 grow flex flex-col relative">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                          Présentation de la classe
                        </div>

                        <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-1 text-xs tracking-[0] leading-[21.6px]">
                          10min 34s
                        </div>
                      </div>

                      <img
                        className="relative w-6 h-6"
                        alt="Check"
                        src="/img/check.svg"
                      />
                    </div>

                    <div className="relative self-stretch w-full h-px bg-neutral-100" />

                    <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl">
                      <div className="relative w-[22px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                        02
                      </div>

                      <div className="items-start gap-0.5 flex-1 grow flex flex-col relative">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                          Présentation de la classe
                        </div>

                        <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-1 text-xs tracking-[0] leading-[21.6px]">
                          10min 34s
                        </div>
                      </div>

                      <img
                        className="relative w-6 h-6"
                        alt="Play button"
                        src="/img/play-button-1.svg"
                      />
                    </div>

                    <div className="relative self-stretch w-full h-px bg-neutral-100" />

                    <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl">
                      <div className="relative w-[22px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                        03
                      </div>

                      <div className="items-start gap-0.5 flex-1 grow flex flex-col relative">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                          Présentation de la classe
                        </div>

                        <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-1 text-xs tracking-[0] leading-[21.6px]">
                          10min 34s
                        </div>
                      </div>

                      <img
                        className="relative w-6 h-6"
                        alt="Play button"
                        src="/img/play-button-1-1-2.svg"
                      />
                    </div>

                    <div className="relative self-stretch w-full h-px bg-neutral-100" />

                    <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl">
                      <div className="relative w-[22px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                        04
                      </div>

                      <div className="items-start gap-0.5 flex-1 grow flex flex-col relative">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-sm tracking-[0] leading-[22px]">
                          Présentation de la classe
                        </div>

                        <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-1 text-xs tracking-[0] leading-[21.6px]">
                          10min 34s
                        </div>
                      </div>

                      <img
                        className="relative w-6 h-6"
                        alt="Play button"
                        src="/img/play-button-1-2.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 p-7 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl border border-solid border-[#f3f3f3]">
                  <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#828282] text-sm tracking-[0] leading-[22px]">
                      Section 2 - UX/UI Design for beginner
                    </p>

                    <ChevronDownWrapper />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 p-7 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl border border-solid border-[#f3f3f3]">
                  <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#828282] text-sm tracking-[0] leading-[22px]">
                      Section 2 - UX/UI Design for beginner
                    </p>

                    <ChevronDownWrapper />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-5 w-full flex-[0_0_auto] relative self-stretch">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-black text-xl tracking-[0] leading-7">
                    New Teacher
                  </div>

                  <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-blue-4 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    See all
                  </div>
                </div>

                <div className="flex-col flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-4 px-5 py-4 relative flex-1 grow bg-white rounded-xl border border-solid border-[#f3f3f3]">
                      <img
                        className="relative w-10 h-10 mt-[-7585.00px] ml-[-2086.00px] object-cover"
                        alt="Img"
                        src="/img/img-5.png"
                      />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-base tracking-[0] leading-6">
                          Ronald Richards
                        </div>

                        <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-gray-1 text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                          Biology Professor
                        </div>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#f3f3f3]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-blue-4 text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                          Contact
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-4 relative flex-1 grow bg-white rounded-xl border border-solid border-[#f3f3f3]">
                      <img
                        className="relative w-10 h-10 mt-[-7585.00px] ml-[-2553.50px] object-cover"
                        alt="Img"
                        src="/img/img-5.png"
                      />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-base tracking-[0] leading-6">
                          Eleanor Pena
                        </div>

                        <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-gray-1 text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                          Biology Professor
                        </div>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#f3f3f3]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-blue-4 text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                          Contact
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-4 px-5 py-4 relative flex-1 grow bg-white rounded-xl border border-solid border-[#f3f3f3]">
                      <img
                        className="relative w-10 h-10 mt-[-7685.00px] ml-[-2086.00px] object-cover"
                        alt="Img"
                        src="/img/img-5.png"
                      />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-base tracking-[0] leading-6">
                          Bessie Cooper
                        </div>

                        <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-gray-1 text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                          Biology Professor
                        </div>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#f3f3f3]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-blue-4 text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                          Contact
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-4 relative flex-1 grow bg-white rounded-xl border border-solid border-[#f3f3f3]">
                      <img
                        className="relative w-10 h-10 mt-[-7685.00px] ml-[-2553.50px] object-cover"
                        alt="Img"
                        src="/img/img-5.png"
                      />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-base tracking-[0] leading-6">
                          Marvin McKinney
                        </div>

                        <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-gray-1 text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                          Biology Professor
                        </div>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#f3f3f3]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-blue-4 text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                          Contact
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-4 px-5 py-4 relative flex-1 grow bg-white rounded-xl border border-solid border-[#f3f3f3]">
                      <img
                        className="relative w-10 h-10 mt-[-7785.00px] ml-[-2086.00px] object-cover"
                        alt="Img"
                        src="/img/img-5.png"
                      />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-base tracking-[0] leading-6">
                          Savannah Nguyen
                        </div>

                        <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-gray-1 text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                          Biology Professor
                        </div>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#f3f3f3]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-blue-4 text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                          Contact
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-4 relative flex-1 grow bg-white rounded-xl border border-solid border-[#f3f3f3]">
                      <img
                        className="relative w-10 h-10 mt-[-7785.00px] ml-[-2553.50px] object-cover"
                        alt="Img"
                        src="/img/img-5.png"
                      />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#202226] text-base tracking-[0] leading-6">
                          Jenny Wilson
                        </div>

                        <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-gray-1 text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                          Biology Professor
                        </div>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#f3f3f3]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-blue-4 text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                          Contact
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 p-8 relative flex-1 self-stretch grow bg-[#f7f7f7]">
            <div className="flex flex-col items-center gap-[65px] pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl overflow-hidden border border-solid border-[#f3f3f3]">
              <div className="relative self-stretch w-full h-[169px] bg-[url(./static/img/img-6.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[90px] h-[90px] top-[124px] left-[178px] bg-[#c4c4c4] rounded-[45px] border-4 border-solid border-[#ffffff]" />
              </div>

              <div className="flex flex-col items-center gap-1 w-full flex-[0_0_auto] relative self-stretch">
                <div className="mt-[-1.00px] font-heading font-[number:var(--heading-font-weight)] text-[#202226] text-[length:var(--heading-font-size)] text-center tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] relative self-stretch [font-style:var(--heading-font-style)]">
                  Leslie Alexander
                </div>

                <div className="font-body-regular font-[number:var(--body-regular-font-weight)] text-gray-1 text-[length:var(--body-regular-font-size)] text-center tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] relative self-stretch [font-style:var(--body-regular-font-style)]">
                  Leslie Alexander
                </div>

                <div className="items-start gap-3 pt-5 pb-0 px-6 flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-col gap-3 p-3 flex-1 grow rounded-xl border border-solid border-[#f3f3f3] flex items-center relative">
                    <div className="items-center gap-1 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                      <img
                        className="relative w-6 h-6"
                        alt="Video lesson"
                        src="/img/video-lesson-1.svg"
                      />

                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-neutralblack text-sm text-center tracking-[0] leading-6">
                        Lessons
                      </div>
                    </div>

                    <div className="items-center justify-center gap-2 p-2 bg-[#f3f3f3] rounded-lg flex relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[#202226] leading-[22px] whitespace-nowrap font-semibold text-sm tracking-[0]">
                        24
                      </div>
                    </div>
                  </div>

                  <div className="flex-col gap-3 p-3 flex-1 grow rounded-xl border border-solid border-[#f3f3f3] flex items-center relative">
                    <div className="items-center gap-1 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                      <img
                        className="relative w-6 h-6"
                        alt="Insignia"
                        src="/img/insignia-1.svg"
                      />

                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-neutralblack text-sm text-center tracking-[0] leading-6">
                        Medals
                      </div>
                    </div>

                    <div className="items-center justify-center gap-2 p-2 bg-[#f3f3f3] rounded-lg flex relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[#202226] leading-[22px] whitespace-nowrap font-semibold text-sm tracking-[0]">
                        36
                      </div>
                    </div>
                  </div>

                  <div className="flex-col gap-3 p-3 flex-1 grow rounded-xl border border-solid border-[#f3f3f3] flex items-center relative">
                    <div className="items-center gap-1 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                      <Course className="!relative !w-6 !h-6" color="#3481ED" />
                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-neutralblack text-sm text-center tracking-[0] leading-6">
                        Exam
                      </div>
                    </div>

                    <div className="items-center justify-center gap-2 p-2 bg-[#f3f3f3] rounded-lg flex relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[#202226] leading-[22px] whitespace-nowrap font-semibold text-sm tracking-[0]">
                        12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-5 w-full flex-[0_0_auto] relative self-stretch">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-black text-xl tracking-[0] leading-7">
                  Nouvel enseignant
                </div>

                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-blue-4 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Voir tous
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl overflow-hidden border border-solid border-[#f3f3f3]">
                <div className="relative w-[94px] h-[94px] bg-[#c4c4c4] rounded-lg" />

                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <p className="relative w-[210px] mt-[-1.00px] font-course-title font-[number:var(--course-title-font-weight)] text-black text-[length:var(--course-title-font-size)] tracking-[var(--course-title-letter-spacing)] leading-[var(--course-title-line-height)] [font-style:var(--course-title-font-style)]">
                    Deploy Java Spring Apps Online to Amazon Cloud
                  </p>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      Part 4
                    </div>

                    <div className="relative w-1.5 h-1.5 bg-[#d9d9d9] rounded-[3px]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      10 min left
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-[3px] bg-line rounded-[50px] overflow-hidden">
                    <div className="w-[110px] h-[3px] bg-blue-4 rounded-[50px]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl overflow-hidden border border-solid border-[#f3f3f3]">
                <div className="relative w-[94px] h-[94px] bg-[#c4c4c4] rounded-lg" />

                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <p className="relative w-[210px] mt-[-1.00px] font-course-title font-[number:var(--course-title-font-weight)] text-black text-[length:var(--course-title-font-size)] tracking-[var(--course-title-letter-spacing)] leading-[var(--course-title-line-height)] [font-style:var(--course-title-font-style)]">
                    Master Course in Social Media Marketing
                  </p>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      Part 4
                    </div>

                    <div className="relative w-1.5 h-1.5 bg-[#d9d9d9] rounded-[3px]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      10 min left
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-[3px] bg-line rounded-[50px] overflow-hidden">
                    <div className="w-[110px] h-[3px] bg-blue-4 rounded-[50px]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl overflow-hidden border border-solid border-[#f3f3f3]">
                <div className="relative w-[94px] h-[94px] bg-[#c4c4c4] rounded-lg" />

                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <p className="relative w-[210px] mt-[-1.00px] font-course-title font-[number:var(--course-title-font-weight)] text-black text-[length:var(--course-title-font-size)] tracking-[var(--course-title-letter-spacing)] leading-[var(--course-title-line-height)] [font-style:var(--course-title-font-style)]">
                    Getting Started With PHP And MySQL For Beginners
                  </p>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      Part 4
                    </div>

                    <div className="relative w-1.5 h-1.5 bg-[#d9d9d9] rounded-[3px]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      10 min left
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-[3px] bg-line rounded-[50px] overflow-hidden">
                    <div className="w-[110px] h-[3px] bg-blue-4 rounded-[50px]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-2xl overflow-hidden border border-solid border-[#f3f3f3]">
                <div className="relative w-[94px] h-[94px] bg-[#c4c4c4] rounded-lg" />

                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <p className="relative w-[210px] mt-[-1.00px] font-course-title font-[number:var(--course-title-font-weight)] text-black text-[length:var(--course-title-font-size)] tracking-[var(--course-title-letter-spacing)] leading-[var(--course-title-line-height)] [font-style:var(--course-title-font-style)]">
                    Deploy Java Spring Apps Online to Amazon Cloud
                  </p>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      Part 4
                    </div>

                    <div className="relative w-1.5 h-1.5 bg-[#d9d9d9] rounded-[3px]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#828282] text-xs tracking-[0] leading-4 whitespace-nowrap">
                      10 min left
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-[3px] bg-line rounded-[50px] overflow-hidden">
                    <div className="w-[110px] h-[3px] bg-blue-4 rounded-[50px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[124px] h-[35px] top-[791px] left-[1057px]">
          <div className="relative w-[122px] h-[35px] bg-[#005dff] rounded-3xl">
            <div className="absolute top-[5px] left-[25px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[normal]">
              S’inscrire
            </div>
          </div>
        </div>

        <div className="absolute w-[345px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
          <div className="relative w-[363px] h-[1502px] top-[102px]">
            <div className="absolute w-[345px] h-[747px] top-[755px] left-0 bg-[#d6e5fd] rounded-[0px_30px_2px_0px]" />

            <div className="absolute w-[363px] h-[865px] top-0 left-0">
              <div className="absolute w-[361px] h-[252px] top-[172px] left-0">
                <div className="absolute w-[347px] h-20 top-0 left-0">
                  <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                    <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                      Offres d’emploi
                    </div>

                    <img
                      className="absolute w-7 h-7 top-[26px] left-[76px]"
                      alt="Ic search"
                      src="/img/ic-search-2.svg"
                    />
                  </div>
                </div>

                <div className="absolute w-[361px] h-[163px] top-[51px] left-0">
                  <div className="relative w-[359px] h-[163px]">
                    <div className="absolute w-[345px] h-20 top-[39px] left-0 bg-[#e0ebff]" />

                    <img
                      className="absolute w-[302px] h-[163px] top-0 left-[57px]"
                      alt="Background"
                      src="/img/background.svg"
                    />

                    <div className="absolute top-[65px] left-[149px] [font-family:'Poppins',Helvetica] font-semibold text-[#000000] text-lg tracking-[0] leading-[normal]">
                      Formations
                    </div>

                    <img
                      className="absolute w-7 h-7 top-[65px] left-[76px]"
                      alt="Ic applications"
                      src="/img/ic-applications.svg"
                    />
                  </div>
                </div>

                <div className="absolute w-[347px] h-20 top-[172px] left-0">
                  <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                    <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                      Forum
                    </div>

                    <img
                      className="absolute w-7 h-7 top-[26px] left-[76px]"
                      alt="Ic analytics"
                      src="/img/ic-analytics.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute w-[347px] h-20 top-0 left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Profil utilisateur
                  </div>

                  <img
                    className="absolute w-[19px] h-[19px] top-[30px] left-[81px]"
                    alt="Vector"
                    src="/img/image.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[347px] h-20 top-[434px] left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Rendez-vous
                  </div>

                  <img
                    className="absolute w-[21px] h-[21px] top-[29px] left-[78px]"
                    alt="Vector"
                    src="/img/vector-1.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[347px] h-20 top-[524px] left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <p className="absolute w-[164px] top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Coding game &amp; Tests techniques
                  </p>

                  <img
                    className="absolute w-7 h-7 top-[26px] left-[76px]"
                    alt="Ic news"
                    src="/img/ic-news.svg"
                  />
                </div>
              </div>

              <div className="absolute w-60 h-[60px] top-[92px] left-[60px]">
                <div className="absolute top-4 left-[89px] [font-family:'Poppins',Helvetica] font-normal text-[#707070] text-lg tracking-[0] leading-[normal]">
                  Tableau de bord
                </div>

                <div className="absolute w-[60px] h-[60px] top-0 left-0 rounded-[18px]">
                  <img
                    className="absolute w-7 h-7 top-4 left-4"
                    alt="Ic home"
                    src="/img/ic-home.svg"
                  />
                </div>
              </div>

              <div className="absolute top-[788px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                Paramètres
              </div>

              <div className="absolute top-[838px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                Déconnection
              </div>

              <img
                className="absolute w-[27px] h-[27px] top-[792px] left-[75px]"
                alt="Vector"
                src="/img/vector-2.svg"
              />

              <img
                className="absolute w-[27px] h-[15px] top-[844px] left-[72px]"
                alt="Vector"
                src="/img/vector-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
