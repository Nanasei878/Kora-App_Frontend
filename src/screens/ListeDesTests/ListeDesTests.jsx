import React from "react";
import { Link } from "react-router-dom";
import { Group } from "../../components/Group";
import { IconFillMore } from "../../components/IconFillMore";
import { IconFillMoreWrapper } from "../../components/IconFillMoreWrapper";
import { VuesaxLinearArrow } from "../../components/VuesaxLinearArrow";
import { IconlyLightSwap2 } from "../../icons/IconlyLightSwap2";
import { VuesaxLinearArrowUp3 } from "../../icons/VuesaxLinearArrowUp3";

export const ListeDesTests = () => {
  return (
    <div className="relative w-[1920px] h-[1024px] bg-white overflow-hidden">
      <img
        className="absolute w-[95px] h-[21px] top-[-2467px] left-[-12298px]"
        alt="Vector"
        src="/img/vector.svg"
      />

      <div className="absolute w-[1920px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
        <div className="absolute w-[345px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
          <div className="relative w-[358px] h-[1502px] top-[102px]">
            <div className="absolute w-[345px] h-[747px] top-[755px] left-0 bg-[#d6e5fd] rounded-[0px_30px_2px_0px]" />

            <div className="absolute w-[358px] h-[865px] top-0 left-0">
              <div className="absolute w-[347px] h-20 top-[172px] left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-normal text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Offres d’emploi
                  </div>

                  <img
                    className="absolute w-7 h-7 top-[26px] left-[76px]"
                    alt="Ic search"
                    src="/img/ic-search-1.svg"
                  />
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

              <div className="absolute w-[347px] h-20 top-[262px] left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Formations
                  </div>

                  <img
                    className="absolute w-7 h-7 top-[26px] left-[76px]"
                    alt="Ic applications"
                    src="/img/ic-applications.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[347px] h-20 top-[344px] left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-normal text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Forum
                  </div>

                  <img
                    className="absolute w-7 h-7 top-[26px] left-[76px]"
                    alt="Ic analytics"
                    src="/img/ic-analytics.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[356px] h-[211px] top-[434px] left-0">
                <div className="absolute w-[347px] h-20 top-0 left-0">
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

                <Link
                  className="absolute w-[356px] h-[163px] top-12 left-0 block"
                  to="/liste-des-tests"
                >
                  <div className="relative w-[354px] h-[163px]">
                    <div className="absolute w-[345px] h-20 top-[42px] left-0 bg-[#e0ebff]" />

                    <img
                      className="absolute w-[302px] h-[163px] top-0 left-[52px]"
                      alt="Background"
                      src="/img/background.svg"
                    />

                    <p className="absolute w-[164px] top-[55px] left-[149px] [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                      Coding game &amp; Tests techniques
                    </p>

                    <img
                      className="absolute w-7 h-7 top-[68px] left-[76px]"
                      alt="Ic news"
                      src="/img/ic-news.svg"
                    />
                  </div>
                </Link>
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

        <div className="absolute w-[1575px] h-[1604px] top-0 left-[345px]">
          <div className="absolute w-[1575px] h-[1510px] top-[94px] left-0 bg-[#f2f2f2] rounded-[0px_0px_0px_38px]" />

          <div className="flex flex-col w-[1470px] items-start gap-4 p-7 absolute top-[93px] left-[49px] bg-white border border-solid border-[#ececf1]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-lg tracking-[0.18px] leading-[normal]">
                  Différents tests
                </div>

                <img
                  className="relative w-5 h-5"
                  alt="Arrow right"
                  src="/img/arrow-right-2.svg"
                />
              </div>

              <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <div className="self-stretch w-full h-36 bg-[#d9d9d9] rounded-md overflow-hidden border-[#bb9cff] shadow-[0px_0px_0px_3px_#8247ff26] relative border border-solid">
                    <div className="left-[155px] absolute w-8 h-8 top-[54px] opacity-90">
                      <div className="relative w-[34px] h-[34px] -top-px -left-px bg-[url(./dist/img/ellipse-60.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-4 h-4 top-[9px] left-[9px]"
                          alt="Iconly bold play"
                          src="/img/iconly-bold-play.svg"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col w-[317px] items-center gap-1.5 absolute top-[109px] left-3">
                      <div className="relative self-stretch w-full flex-[0_0_auto]" />

                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          17:49
                        </div>

                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          34:00
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-1 py-px absolute top-[11px] left-[11px] bg-[#33333333] rounded-[3px] overflow-hidden border-[0.6px] border-solid border-transparent backdrop-blur-[132px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(132px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgb(255,255,255),rgba(255,255,255,0.1))_1]">
                      <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffffe6] text-[8.5px] tracking-[0] leading-[normal]">
                        PART 4
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#272727] text-sm tracking-[0.14px] leading-[normal]">
                      Mastering paid advertising on soci...
                    </p>

                    <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[10px] tracking-[0.15px] leading-[normal]">
                      Digital Marketing
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <div className="relative self-stretch w-full h-36 bg-[#d9d9d9] rounded-md overflow-hidden">
                    <div className="flex flex-col w-[244px] items-center gap-1.5 absolute top-[109px] left-3">
                      <div className="relative self-stretch w-full flex-[0_0_auto]" />

                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          17:49
                        </div>

                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          34:00
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-8 h-8 top-[54px] left-[154px] opacity-90">
                      <div className="relative w-[34px] h-[34px] -top-px -left-px bg-[url(./dist/img/ellipse-60-1.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-4 h-4 top-[9px] left-[9px]"
                          alt="Iconly bold play"
                          src="/img/iconly-bold-play-1.svg"
                        />
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-1 py-px absolute top-[11px] left-[11px] bg-[#33333333] rounded-[3px] overflow-hidden border-[0.6px] border-solid border-transparent backdrop-blur-[132px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(132px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgb(255,255,255),rgba(255,255,255,0.1))_1]">
                      <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffffe6] text-[8.5px] tracking-[0] leading-[normal]">
                        PART 9
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#272727] text-sm tracking-[0.14px] leading-[normal]">
                      Storytelling in Copy: Engaging Your...
                    </p>

                    <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[10px] tracking-[0.15px] leading-[normal]">
                      Copy Writing
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <div className="relative self-stretch w-full h-36 bg-[#d9d9d9] rounded-md overflow-hidden">
                    <div className="flex flex-col w-[244px] items-center gap-1.5 absolute top-[109px] left-3">
                      <div className="relative self-stretch w-full flex-[0_0_auto]" />

                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          17:49
                        </div>

                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          34:00
                        </div>
                      </div>
                    </div>

                    <div className="left-[153px] absolute w-8 h-8 top-[54px] opacity-90">
                      <div className="relative w-[34px] h-[34px] -top-px -left-px bg-[url(./dist/img/ellipse-60-2.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-4 h-4 top-[9px] left-[9px]"
                          alt="Iconly bold play"
                          src="/img/iconly-bold-play-2.svg"
                        />
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-1 py-px absolute top-[11px] left-[11px] bg-[#33333333] rounded-[3px] overflow-hidden border-[0.6px] border-solid border-transparent backdrop-blur-[132px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(132px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgb(255,255,255),rgba(255,255,255,0.1))_1]">
                      <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffffe6] text-[8.5px] tracking-[0] leading-[normal]">
                        PART 7
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#272727] text-sm tracking-[0.14px] leading-[normal]">
                      Building a Brand Through Social Me...
                    </p>

                    <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[10px] tracking-[0.15px] leading-[normal]">
                      Social Media Specialist
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <div className="relative self-stretch w-full h-36 bg-[#d9d9d9] rounded-md overflow-hidden">
                    <div className="flex flex-col w-[244px] items-center gap-1.5 absolute top-[109px] left-[13px]">
                      <div className="relative self-stretch w-full flex-[0_0_auto]" />

                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          17:49
                        </div>

                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-[10px] tracking-[0.30px] leading-[normal]">
                          34:00
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-8 h-8 top-[54px] left-[154px] opacity-90">
                      <div className="relative w-[34px] h-[34px] -top-px -left-px bg-[url(./dist/img/ellipse-60-3.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-4 h-4 top-[9px] left-[9px]"
                          alt="Iconly bold play"
                          src="/img/iconly-bold-play-3.svg"
                        />
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-1 py-px absolute top-[11px] left-[11px] bg-[#33333333] rounded-[3px] overflow-hidden border-[0.6px] border-solid border-transparent backdrop-blur-[132px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(132px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgb(255,255,255),rgba(255,255,255,0.1))_1]">
                      <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffffe6] text-[8.5px] tracking-[0] leading-[normal]">
                        PART 4
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#272727] text-sm tracking-[0.14px] leading-[normal]">
                      Navigating the Canva Workspace: A...
                    </p>

                    <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[10px] tracking-[0.15px] leading-[normal]">
                      Basic Design Canva
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[442px] h-[786px] items-start gap-2 pt-6 pb-7 px-0 absolute top-[386px] left-[49px] bg-white border border-solid border-[#ececf1]">
            <div className="flex items-center justify-between px-7 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[15px] tracking-[0.15px] leading-[normal]">
                  Messages
                </div>

                <img
                  className="relative w-5 h-5"
                  alt="Arrow right"
                  src="/img/arrow-right-2.svg"
                />
              </div>

              <img
                className="relative w-5 h-5"
                alt="Iconly light outline"
                src="/img/iconly-light-outline-search.svg"
              />
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-26.00px]">
              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                        Beby Tsabina
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333cc] text-xs tracking-[0.06px] leading-[normal]">
                        So, You need to rewatch lessons 7
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-1 relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.48
                    </div>

                    <div className="inline-flex flex-col items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ff9c41] rounded-[30px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0.05px] leading-[normal] whitespace-nowrap">
                        4
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex-1 relative mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                        Mr. Lee
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#333333cc] text-xs tracking-[0.06px] leading-[normal]">
                        Thank you for ur answer
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.15
                    </div>

                    <img
                      className="relative w-5 h-5"
                      alt="Check"
                      src="/img/check-1-1-1.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                        Cut Syifa
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333cc] text-xs tracking-[0.06px] leading-[normal]">
                        Yes, no need images
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-1 relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.10
                    </div>

                    <div className="relative w-[18px] h-[19px]">
                      <div className="h-[19px]">
                        <div className="inline-flex flex-col items-center justify-center gap-2.5 p-1.5 relative bg-[#ff9c41] rounded-[30px]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0.05px] leading-[normal] whitespace-nowrap">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col h-10 items-start gap-1 relative flex-1 grow">
                    <div className="relative flex-1 w-[222px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                      Raissa Anggraini
                    </div>

                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#6171ed] text-xs tracking-[0.06px] leading-[normal]">
                        Typing ...
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-2 relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.09
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                        Lyodra Ginting
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <img
                        className="relative w-4 h-4"
                        alt="Frame"
                        src="/img/frame.svg"
                      />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#e42e2ecc] text-xs tracking-[0.06px] leading-[normal]">
                        Missed voice call
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-1 relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.08
                    </div>

                    <div className="relative w-[18px] h-[19px]">
                      <div className="h-[19px]">
                        <div className="inline-flex flex-col items-center justify-center gap-2.5 p-1.5 relative bg-[#ff9c41] rounded-[30px]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0.05px] leading-[normal] whitespace-nowrap">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <div className="relative w-[223px] h-[18px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                      Della Dertyan
                    </div>

                    <div className="relative flex-1 w-[223px] [font-family:'Poppins',Helvetica] font-normal text-[#6171ed] text-xs tracking-[0.06px] leading-[normal]">
                      Typing ...
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-2 relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.07
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-fit relative mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                      Mr. Jackson
                    </div>

                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.04
                    </div>
                  </div>

                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#333333cc] text-xs tracking-[0.06px] leading-[normal]">
                        Thanks
                      </div>
                    </div>

                    <img
                      className="relative w-5 h-5"
                      alt="Check"
                      src="/img/check-1-1-1.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                        Merry Jane
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#333333cc] text-xs tracking-[0.06px] leading-[normal]">
                        yaudah kabari kalo udah
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-2 relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.00
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pl-7 pr-6 py-5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#ececf1]">
                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[30px]" />

                  <div className="absolute w-2.5 h-2.5 top-[30px] left-7 bg-[#24cc35] rounded-[5px] border-[1.5px] border-solid border-white" />
                </div>

                <div className="flex items-start justify-end relative flex-1 grow">
                  <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-xs tracking-[0.06px] leading-[normal]">
                        Merry Jane
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#333333cc] text-xs tracking-[0.06px] leading-[normal]">
                        yaudah kabari kalo udah
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-2 relative flex-[0_0_auto]">
                    <div className="font-medium text-[#33333366] tracking-[0.06px] leading-5 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                      21.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[1028px] h-[724px] items-start absolute top-[387px] left-[490px]">
            <div className="flex flex-col w-[1030px] items-start gap-4 pl-6 pr-7 pt-6 pb-4 flex-[0_0_auto] mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#fafafc] border-[#ececf1] relative border border-solid">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[15px] tracking-[0.15px] leading-[normal]">
                  Formations que vous suivez
                </div>

                <img
                  className="relative w-5 h-5"
                  alt="Arrow right"
                  src="/img/arrow-right-2.svg"
                />
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] rounded-md overflow-hidden border border-solid border-[#ececf1]">
                <div className="flex items-center gap-7 px-4 py-3.5 relative self-stretch w-full flex-[0_0_auto] mt-[-1.00px] ml-[-1.00px] bg-white border border-solid border-[#ececf1]">
                  <div className="relative flex-1 mt-[-0.50px] [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[10px] tracking-[0] leading-[normal]">
                    TITRE DE FORMATION
                  </div>

                  <div className="flex w-[90px] items-center gap-1 relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[10px] tracking-[0] leading-[normal]">
                      LESSONS
                    </div>

                    <IconlyLightSwap2 className="!relative !w-3.5 !h-3.5" />
                  </div>

                  <div className="flex w-[100px] items-center gap-1 relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[10px] tracking-[0] leading-[normal]">
                      PROGRESSION
                    </div>

                    <IconlyLightSwap2 className="!relative !w-3.5 !h-3.5" />
                  </div>

                  <div className="relative w-[185px] mt-[-0.50px] [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[10px] tracking-[0] leading-[normal]">
                    INSTRUCTEUR
                  </div>

                  <div className="absolute w-5 h-5 top-3.5 left-[752px]" />
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white">
                  <div className="flex items-center gap-7 p-4 relative self-stretch w-full flex-[0_0_auto] mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#ececf1]">
                    <div className="flex items-center gap-3 relative flex-1 grow">
                      <div className="relative w-[46px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[3px] border-[0.8px] border-solid border-[#d3d3eb] shadow-[0px_0px_2px_#8770e226]" />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                          Copywriting
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          by Rouslyan Gourd
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[90px] [font-family:'Poppins',Helvetica] font-normal text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                      12 lessons
                    </div>

                    <div className="flex flex-col w-[100px] items-start gap-[17px] relative">
                      <div className="relative self-stretch w-full h-[5px] bg-[#ececec] rounded" />

                      <div className="w-[76px] absolute h-[5px] top-0 left-0 bg-[#8247ff] rounded" />
                    </div>

                    <div className="flex w-[185px] items-center gap-3 relative">
                      <div className="relative w-[34px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[48px] border border-solid border-[#e2e2e2] shadow-[0px_1px_2px_#00000029]" />

                      <div className="flex flex-col w-[180px] items-start relative mr-[-39.00px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-xs tracking-[0] leading-[normal]">
                          Arlene McCoy
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          whimsy@comcast.net
                        </div>
                      </div>
                    </div>

                    <IconFillMore
                      className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      iconFillMore="/img/icon-fill-more-horizontal-2.svg"
                    />
                  </div>

                  <div className="flex items-center gap-7 p-4 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#ececf1]">
                    <div className="flex items-center gap-3 relative flex-1 grow">
                      <div className="relative w-[46px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[3px] border-[0.8px] border-solid border-[#d3d3eb] shadow-[0px_0px_2px_#8770e226]" />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                          Digital Marketing
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          by Rouslyan Gourd
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[90px] [font-family:'Poppins',Helvetica] font-normal text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                      8 lessons
                    </div>

                    <div className="flex flex-col w-[100px] items-start gap-[17px] relative">
                      <div className="relative self-stretch w-full h-[5px] bg-[#ececec] rounded" />

                      <div className="w-[42px] absolute h-[5px] top-0 left-0 bg-[#8247ff] rounded" />
                    </div>

                    <div className="flex w-[185px] items-center gap-3 relative">
                      <div className="relative w-[34px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[48px] border border-solid border-[#e2e2e2] shadow-[0px_1px_2px_#00000029]" />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-xs tracking-[0] leading-[normal]">
                          Kristin Watson
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          seano@icloud.com
                        </div>
                      </div>
                    </div>

                    <IconFillMore
                      className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      iconFillMore="/img/icon-fill-more-horizontal-3.svg"
                    />
                  </div>

                  <div className="flex items-center gap-7 p-4 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#ececf1]">
                    <div className="flex items-center gap-3 relative flex-1 grow">
                      <div className="relative w-[46px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[3px] border-[0.8px] border-solid border-[#d3d3eb] shadow-[0px_0px_2px_#8770e226]" />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                          Basic Design Canva
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          by Rouslyan Gourd
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[90px] [font-family:'Poppins',Helvetica] font-normal text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                      6 lessons
                    </div>

                    <div className="flex flex-col w-[100px] items-start gap-[17px] relative">
                      <div className="relative self-stretch w-full h-[5px] bg-[#ececec] rounded" />

                      <div className="absolute w-[70px] h-[5px] top-0 left-0 bg-[#8247ff] rounded" />
                    </div>

                    <div className="flex w-[185px] items-center gap-3 relative">
                      <div className="relative w-[34px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[48px] border border-solid border-[#e2e2e2] shadow-[0px_1px_2px_#00000029]" />

                      <div className="flex flex-col w-[180px] items-start relative mr-[-39.00px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-xs tracking-[0] leading-[normal]">
                          Jane Cooper
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          aibrahim@verizon.net
                        </div>
                      </div>
                    </div>

                    <IconFillMore
                      className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      iconFillMore="/img/icon-fill-more-horizontal-4.svg"
                    />
                  </div>

                  <div className="flex items-center gap-7 p-4 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#ececf1]">
                    <div className="flex items-center gap-3 relative flex-1 grow">
                      <div className="relative w-[46px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[3px] border-[0.8px] border-solid border-[#d3d3eb] shadow-[0px_0px_2px_#8770e226]" />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                          Social Media Specialist
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          by Rouslyan Gourd
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[90px] [font-family:'Poppins',Helvetica] font-normal text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                      10 lessons
                    </div>

                    <div className="flex flex-col w-[100px] items-start gap-[17px] relative">
                      <div className="relative self-stretch w-full h-[5px] bg-[#ececec] rounded" />

                      <div className="absolute w-[70px] h-[5px] top-0 left-0 bg-[#8247ff] rounded" />
                    </div>

                    <div className="flex w-[185px] items-center gap-3 relative">
                      <div className="relative w-[34px] h-[34px] ml-[-1.00px] bg-[#d9d9d9] rounded-[48px] border border-solid border-[#e2e2e2] shadow-[0px_1px_2px_#00000029]" />

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-xs tracking-[0] leading-[normal]">
                          Albert Flores
                        </div>

                        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-xs tracking-[0] leading-[normal]">
                          leviathan@yahoo.com
                        </div>
                      </div>
                    </div>

                    <IconFillMore
                      className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      iconFillMore="/img/icon-fill-more-horizontal-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pl-6 pr-7 pt-0 pb-7 relative flex-1 self-stretch w-full grow bg-[#fafafc]">
              <div className="flex flex-col w-[217.5px] items-start gap-4 relative self-stretch">
                <div className="flex flex-col items-start gap-3 p-4 relative flex-1 self-stretch w-full grow mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[5px] border border-solid border-[#ececf1]">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[13px] tracking-[0.13px] leading-[normal]">
                      Performance
                    </div>

                    <IconFillMoreWrapper
                      className="!h-4 !relative !left-[unset] !w-4 !top-[unset]"
                      iconFillMore="/img/icon-fill-more-horizontal-6.svg"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-end gap-2.5 relative flex-1 self-stretch w-full grow">
                    <img
                      className="relative w-[185px] h-11"
                      alt="Group"
                      src="/img/group.svg"
                    />

                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="w-fit mt-[-1.00px] text-xs relative [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] tracking-[0] leading-[normal]">
                        11 Certificats
                      </div>

                      <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#26b044] text-[10px] tracking-[0] leading-[normal]">
                          25.0%
                        </div>

                        <VuesaxLinearArrowUp3 className="!relative !w-2.5 !h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 p-4 relative flex-1 self-stretch w-full grow mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[5px] border border-solid border-[#ececf1]">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[13px] tracking-[0.13px] leading-[normal]">
                      Time Spended
                    </div>

                    <IconFillMoreWrapper
                      className="!h-4 !relative !left-[unset] !w-4 !top-[unset]"
                      iconFillMore="/img/icon-fill-more-horizontal-7.svg"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-end gap-2.5 relative flex-1 self-stretch w-full grow">
                    <img
                      className="relative w-[185px] h-[29px]"
                      alt="Group"
                      src="/img/group-1.svg"
                    />

                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="font-normal text-[#a0a1ac] tracking-[0] leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xs">
                        39:32:59
                      </div>

                      <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#26b044] text-[10px] tracking-[0] leading-[normal]">
                          11.90%
                        </div>

                        <VuesaxLinearArrow />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start pt-0 pb-4 px-0 relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] bg-white rounded-[5px] border border-solid border-[#ececf1]">
                <div className="flex items-center justify-between p-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[13px] tracking-[0.13px] leading-[normal]">
                    Progression
                  </div>

                  <IconFillMoreWrapper
                    className="!h-4 !relative !left-[unset] !w-4 !top-[unset]"
                    iconFillMore="/img/icon-fill-more-horizontal-8.svg"
                  />
                </div>

                <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full grow">
                  <div className="flex items-center gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-2 relative flex-1 grow">
                      <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-xs tracking-[0] leading-[normal]">
                          Task Progress
                        </div>

                        <div className="w-fit text-[10px] relative [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] tracking-[0] leading-[normal]">
                          6 Completed
                        </div>
                      </div>

                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#2f9c47] text-[9px] tracking-[0] leading-[normal]">
                          2.77%
                        </div>

                        <div className="inline-flex items-center gap-2.5 pt-0 pb-px px-0 relative flex-[0_0_auto]">
                          <VuesaxLinearArrowUp3 className="!relative !w-[9px] !h-[9px]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative w-14 h-14">
                      <div className="relative w-[55px] h-14">
                        <div className="absolute w-[54px] h-[54px] top-px left-px rounded-[26.83px] border-[2.8px] border-solid border-[#3f405f1a]" />

                        <img
                          className="absolute w-8 h-14 top-0 left-0"
                          alt="Ellipse"
                          src="/img/ellipse-189.svg"
                        />

                        <div className="absolute top-[19px] left-4 [font-family:'Urbanist',Helvetica] font-semibold text-[#a0a1ac] text-sm tracking-[0] leading-[normal]">
                          46%
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Line"
                    src="/img/line-79.svg"
                  />

                  <div className="flex items-center gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-2 relative flex-1 grow">
                      <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-xs tracking-[0] leading-[normal]">
                          Assignment
                        </div>

                        <div className="w-fit text-[10px] relative [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] tracking-[0] leading-[normal]">
                          4 Completed
                        </div>
                      </div>

                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#2f9c47] text-[9px] tracking-[0] leading-[normal]">
                          7.90%
                        </div>

                        <div className="inline-flex items-center gap-2.5 pt-0 pb-px px-0 relative flex-[0_0_auto]">
                          <VuesaxLinearArrowUp3 className="!relative !w-[9px] !h-[9px]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative w-14 h-14">
                      <div className="relative w-[55px] h-14">
                        <div className="absolute w-[54px] h-[54px] top-px left-px rounded-[26.83px] border-[2.8px] border-solid border-[#3f405f1a]" />

                        <img
                          className="w-[46px] h-14 absolute top-0 left-0"
                          alt="Ellipse"
                          src="/img/ellipse-189-1.svg"
                        />

                        <div className="absolute top-[19px] left-4 [font-family:'Urbanist',Helvetica] font-semibold text-[#a0a1ac] text-sm tracking-[0] leading-[normal]">
                          62%
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Line"
                    src="/img/line-79.svg"
                  />

                  <div className="flex items-center gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-2 relative flex-1 grow">
                      <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-xs tracking-[0] leading-[normal]">
                          Course Progress
                        </div>

                        <div className="w-[66px] text-[10px] relative [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] tracking-[0] leading-[normal]">
                          11 Completed
                        </div>
                      </div>

                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#2f9c47] text-[9px] tracking-[0] leading-[normal]">
                          3.90%
                        </div>

                        <div className="inline-flex items-center gap-2.5 pt-0 pb-px px-0 relative flex-[0_0_auto]">
                          <VuesaxLinearArrow />
                        </div>
                      </div>
                    </div>

                    <div className="relative w-14 h-14">
                      <div className="relative h-[55px]">
                        <div className="absolute w-[54px] h-[54px] top-px left-px rounded-[26.83px] border-[2.8px] border-solid border-[#3f405f1a]" />

                        <img
                          className="w-14 h-[13px] absolute top-0 left-0"
                          alt="Ellipse"
                          src="/img/ellipse-189-2.svg"
                        />

                        <div className="absolute top-[19px] left-4 [font-family:'Urbanist',Helvetica] font-semibold text-[#a0a1ac] text-sm tracking-[0] leading-[normal]">
                          83%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[296px] items-start gap-4 p-4 relative self-stretch mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] bg-white rounded-[5px] border border-solid border-[#ececf1]">
                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Poppins',Helvetica] font-semibold text-[#503e5c] text-[13px] tracking-[0.13px] leading-[normal]">
                    Recommandation
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Arrow right"
                    src="/img/arrow-right-3.svg"
                  />
                </div>

                <div className="flex flex-col items-start gap-3 relative flex-1 self-stretch w-full grow">
                  <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[76px] h-[46px] bg-[#d9d9d9] rounded-md border border-solid border-[#eaeaea]" />

                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                        Microstock Creator
                      </div>

                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-[11px] tracking-[0] leading-[normal]">
                        by Greater Designer
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[76px] h-[46px] bg-[#d9d9d9] rounded-md border border-solid border-[#eaeaea]" />

                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                        Design system Figma
                      </div>

                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-[11px] tracking-[0] leading-[normal]">
                        by Figma Tutorial
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[76px] h-[46px] bg-[#d9d9d9] rounded-md border border-solid border-[#eaeaea]" />

                    <div className="flex flex-col w-[190px] items-start relative self-stretch mr-[-16.00px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                        Accounting
                      </div>

                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-[11px] tracking-[0] leading-[normal]">
                        by Matematich
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[76px] h-[46px] bg-[#d9d9d9] rounded-md border border-solid border-[#eaeaea]" />

                    <div className="flex flex-col w-[190px] items-start relative self-stretch mr-[-16.00px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#151718] text-[13px] tracking-[0] leading-[normal]">
                        Basic UX Design
                      </div>

                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#a0a1ac] text-[11px] tracking-[0] leading-[normal]">
                        by Figma Tutorial
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[1575px] h-[120px] top-0 left-0 bg-[#f2f2f2]">
            <Group
              className="!absolute !left-[510px] !top-[23px]"
              icChat="/img/ic-chat-1.svg"
              icSearch="/img/ic-search-2.svg"
            />
            <div className="absolute w-[275px] h-[42px] top-[39px] left-[50px]">
              <div className="absolute top-0 left-[74px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-[normal]">
                Liste des tests
              </div>

              <img
                className="absolute w-[29px] h-[18px] top-3 left-0"
                alt="Ic menu"
                src="/img/ic-menu.png"
              />
            </div>

            <div className="absolute w-[182px] h-[57px] top-[31px] left-[1340px]">
              <div className="absolute top-[5px] left-[88px] [font-family:'Poppins',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
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
  );
};
