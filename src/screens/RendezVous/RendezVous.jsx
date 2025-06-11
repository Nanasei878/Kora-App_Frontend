import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonSmall } from "../../components/ButtonSmall";
import { Event } from "../../components/Event";
import { Group } from "../../components/Group";
import { Line } from "../../components/Line";

export const RendezVous = () => {
  return (
    <div className="relative w-[1920px] h-[1024px] bg-white overflow-hidden">
      <img
        className="absolute w-[95px] h-[21px] top-[-2467px] left-[-18253px]"
        alt="Vector"
        src="/img/vector.svg"
      />

      <div className="absolute w-[1619px] h-[1604px] top-0 left-[345px]">
        <div className="absolute w-[1575px] h-[1510px] top-[94px] left-0 bg-[#f2f2f2] rounded-[0px_0px_0px_38px]" />

        <div className="absolute w-[408px] h-[864px] top-[241px] left-[1142px] bg-[#f4f5f7] opacity-50" />

        <div className="absolute w-[1604px] h-[900px] top-[198px] left-[15px]">
          <div className="relative h-[900px]">
            <div className="absolute w-[1420px] h-[763px] top-0 left-[33px] overflow-hidden">
              <ButtonSmall
                className="!absolute !left-[544px] !w-[91px] !top-0"
                text="Lund 21"
                textClassName="!text-[#333841]"
              />
              <div className="top-[9px] left-36 absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                Lund 21
              </div>

              <div className="top-[9px] left-[354px] absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                Lund 21
              </div>

              <div className="top-[9px] left-[764px] absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                Lund 21
              </div>

              <div className="top-[9px] left-[972px] absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                Lund 21
              </div>

              <div className="top-[9px] left-[1174px] absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                Lund 21
              </div>

              <div className="top-[9px] left-[1371px] absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                Lund 21
              </div>

              <div className="top-[177px] left-[5px] absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                9 AM
              </div>

              <div className="top-[319px] left-0 absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                10 AM
              </div>

              <div className="top-[461px] left-0 absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                11 AM
              </div>

              <div className="top-[603px] left-0 absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                12 AM
              </div>

              <div className="top-[745px] left-0 absolute [font-family:'Libre_Franklin',Helvetica] font-medium text-[#333841] text-sm tracking-[0] leading-[normal]">
                1 PM
              </div>
            </div>

            <div className="absolute w-[1604px] h-[715px] top-[43px] left-0">
              <Line className="!absolute !left-[106px] !w-[1428px] !top-[142px]" />
              <Line className="!absolute !left-[106px] !w-[1428px] !top-[285px]" />
              <Line className="!absolute !left-[106px] !w-[1428px] !top-[428px]" />
              <Line className="!absolute !left-[106px] !w-[1428px] !top-[571px]" />
              <Line className="!absolute !left-[106px] !w-[1428px] !top-[714px]" />
              <Line className="!absolute !left-0 !w-[1604px] !top-0" />
            </div>

            <div className="absolute w-[1430px] h-[856px] top-11 left-[106px]">
              <div className="relative h-[856px]">
                <Line className="!absolute !rotate-90 !left-[-427px] !w-[855px] !top-[428px]" />
                <Line className="!absolute !rotate-90 !left-[-223px] !w-[855px] !top-[428px]" />
                <Line className="!absolute !rotate-90 !left-[-19px] !w-[856px] !top-[428px]" />
                <Line className="!absolute !rotate-90 !left-[185px] !w-[856px] !top-[428px]" />
                <Line className="!absolute !rotate-90 !left-[389px] !w-[856px] !top-[428px]" />
                <Line className="!absolute !rotate-90 !left-[593px] !w-[856px] !top-[428px]" />
                <Line className="!absolute !rotate-90 !left-[797px] !w-[856px] !top-[428px]" />
                <Line className="!absolute !rotate-90 !left-[1001px] !w-[856px] !top-[428px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[1005px] h-[784px] top-[308px] left-[130px]">
          <Event
            className="!absolute !left-0 !top-0"
            timeClassName="!text-blueaccent"
          />
          <Event
            className="!absolute !left-[408px] !bg-[#f3eefe] !top-0"
            text="Interview Round 2 - Data Analyst"
            timeClassName="!text-indigoaccent"
          />
          <Event
            className="!h-[151px] !absolute !left-[204px] !bg-orangeultralight !top-[140px]"
            text="Interview Round 1 - Senior Software Developer"
            text1="9.30 AM"
            timeClassName="!text-x-343942"
          />
          <Event
            className="!absolute !left-[408px] !bg-orangeultralight !top-[504px]"
            text="Final Interview - HR Manager"
            text1="12 AM"
            timeClassName="!text-x-343942"
          />
          <Event
            className="!h-[159px] !absolute !left-[204px] !bg-greenultralight !top-[361px]"
            text="Presentation for New Hires"
            text1="11 AM"
            timeClassName="!text-greenaccent"
          />
          <Event
            className="!h-[159px] !absolute !left-[816px] !bg-greenultralight !top-[574px]"
            text="Monthly HR Metrics Report Review"
            text1="3:30 PM"
            timeClassName="!text-greenaccent"
          />
          <Event
            className="!absolute !left-[612px] !bg-greenultralight !top-[363px]"
            text="Interview Round 3 - UX Designer"
            text1="2 PM"
            timeClassName="!text-greenaccent"
          />
          <Event
            className="!absolute !left-0 !bg-orangeultralight !top-[504px]"
            text="Appraisal Deadline"
            text1="12 AM"
            timeClassName="!text-x-343942"
          />
          <Event
            className="!h-[219px] !absolute !left-[612px] !bg-orangeultralight !top-[74px]"
            text="Training Session on Time Management"
            text1="9 AM"
            timeClassName="!text-x-343942"
          />
          <Event
            className="!absolute !left-[408px] !top-[221px]"
            text="Job Fair Preparation"
            text1="10 AM"
            timeClassName="!text-blueaccent"
          />
          <Event
            className="!absolute !left-0 !bg-indigoultralight !top-[309px]"
            text="Diversity &amp; Inclusion Workshop"
            text1="10.30 AM"
            timeClassName="!text-indigoaccent"
          />
          <Event
            className="!absolute !left-[818px] !top-[70px]"
            text="HR Team Meeting"
            text1="9.30 AM"
            timeClassName="!text-blueaccent"
          />
          <div className="h-[140px] top-[293px] left-[818px] bg-[#f3eefe] overflow-hidden border border-solid border-[#4e1bd9] absolute w-[187px] rounded-2xl">
            <div className="absolute w-[155px] top-[15px] left-[15px] text-[#17243e] text-base [font-family:'Libre_Franklin',Helvetica] font-semibold tracking-[0] leading-[normal]">
              Employee Wellness Webinar
            </div>

            <div className="absolute top-[61px] left-4 [font-family:'Libre_Franklin',Helvetica] font-medium text-indigoaccent text-[13px] tracking-[0] leading-[normal]">
              10.30 AM
            </div>
          </div>

          <Event
            className="!absolute !left-[612px] !bg-indigoultralight !top-[644px]"
            text="Diversity &amp; Inclusion Workshop"
            text1="1 PM"
            timeClassName="!text-indigoaccent"
          />
        </div>

        <div className="absolute top-[142px] left-11 text-[#17243e] text-[32px] [font-family:'Libre_Franklin',Helvetica] font-semibold tracking-[0] leading-[normal]">
          Rendez-vous
        </div>

        <div className="absolute w-[406px] h-[544px] top-[472px] left-[1151px] overflow-hidden">
          <div className="relative w-[408px] h-[544px]">
            <div className="absolute w-[389px] h-[524px] top-5 left-0 bg-white rounded-xl shadow-[0px_6px_30px_#959ca647]" />

            <div className="absolute w-[42px] h-10 top-0 left-[366px]">
              <div className="relative w-10 h-10 bg-white rounded-[20px] shadow-[0px_6px_30px_#959ca638]">
                <div className="top-2.5 left-3.5 [font-family:'Font_Awesome_6_Pro-Regular',Helvetica] text-[#333841] text-lg text-center absolute font-normal tracking-[0] leading-[normal] whitespace-nowrap">
                  
                </div>
              </div>
            </div>

            <Button
              className="!absolute !left-[203px] !top-[478px]"
              divClassName="!ml-[-30.50px]"
              frameClassName="!px-[55px] !py-[11px]"
              text=""
              text1="Sauvegarder"
              textClassName="!mr-[-30.50px] !ml-[-15.50px]"
            />
            <div className="w-[163px] top-[478px] left-6 bg-[#eef4fe] rounded-[21px] overflow-hidden absolute h-[42px]">
              <div className="relative w-[68px] h-[19px] top-[11px] left-[43px] overflow-hidden">
                <p className="absolute top-0 left-4 [font-family:'Libre_Franklin',Helvetica] font-medium text-transparent text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  <span className="text-[#1f74ec]">Annule</span>

                  <span className="text-[#005dff]">r</span>
                </p>

                <div className="top-[3px] left-0 [font-family:'Font_Awesome_5_Brands-Regular',Helvetica] text-[#1f74ec] text-xs absolute font-normal tracking-[0] leading-[normal] whitespace-nowrap">
                  
                </div>
              </div>
            </div>

            <div className="absolute w-[342px] h-[70px] top-96 left-6 bg-white rounded-xl overflow-hidden border border-solid border-[#e0e3e9]">
              <div className="absolute top-[11px] left-[35px] [font-family:'Mulish',Helvetica] font-normal text-[#333841] text-sm tracking-[0] leading-[normal]">
                Ajouter une description
              </div>

              <img
                className="absolute w-3 h-3 top-3.5 left-[15px]"
                alt="Message lines"
                src="/img/message-lines.png"
              />
            </div>

            <div className="absolute w-[341px] h-[42px] top-[326px] left-6 bg-white rounded-xl overflow-hidden border border-solid border-[#e0e3e9]">
              <div className="absolute top-[11px] left-[34px] [font-family:'Mulish',Helvetica] font-normal text-[#333841] text-sm tracking-[0] leading-[normal]">
                Ajouter un invité
              </div>

              <img
                className="absolute w-2.5 h-3 top-3.5 left-[15px]"
                alt="User"
                src="/img/user.png"
              />
            </div>

            <div className="absolute w-[342px] h-[42px] top-[268px] left-6 bg-white rounded-xl overflow-hidden border border-solid border-[#e0e3e9]">
              <div className="absolute top-[11px] left-[38px] [font-family:'Mulish',Helvetica] font-normal text-[#135cca] text-sm tracking-[0] leading-[normal]">
                https://www.examplewebinars.com/emplo…
              </div>

              <img
                className="absolute w-[15px] h-3 top-[15px] left-[15px]"
                alt="Link"
                src="/img/link.png"
              />
            </div>

            <div className="absolute w-[163px] h-[42px] top-[210px] left-6 bg-white rounded-xl overflow-hidden border border-solid border-[#e0e3e9]">
              <div className="absolute top-[11px] left-[15px] [font-family:'Mulish',Helvetica] font-normal text-[#23272c] text-sm tracking-[0] leading-[normal]">
                10.30 AM
              </div>

              <img
                className="absolute w-3 h-3 top-3.5 left-[134px]"
                alt="Calendar copy"
                src="/img/calendar-copy-2.png"
              />
            </div>

            <div className="absolute w-[163px] h-[42px] top-[210px] left-[203px] bg-white rounded-xl overflow-hidden border border-solid border-[#e0e3e9]">
              <div className="absolute top-[11px] left-[15px] [font-family:'Mulish',Helvetica] font-normal text-[#23272c] text-sm tracking-[0] leading-[normal]">
                11.30 AM
              </div>

              <img
                className="absolute w-3 h-3 top-3.5 left-[134px]"
                alt="Calendar copy"
                src="/img/calendar-copy-2.png"
              />
            </div>

            <div className="absolute w-[341px] h-[42px] top-[152px] left-6 bg-white rounded-xl overflow-hidden border border-solid border-[#e0e3e9]">
              <div className="absolute top-[11px] left-[34px] [font-family:'Mulish',Helvetica] font-normal text-[#23272c] text-sm tracking-[0] leading-[normal]">
                Friday, August 30
              </div>

              <img
                className="absolute w-2.5 h-3 top-3.5 left-[15px]"
                alt="Calendar"
                src="/img/calendar.png"
              />
            </div>

            <div className="absolute w-[341px] h-[42px] top-[94px] left-6">
              <div className="relative h-[42px] bg-white rounded-xl overflow-hidden border border-solid border-[#1f74ec]">
                <p className="top-2 left-[15px] [font-family:'Mulish',Helvetica] text-[#17243e] absolute font-medium text-sm tracking-[0] leading-[normal]">
                  <span className="[font-family:'Mulish',Helvetica] font-medium text-[#17243e] text-sm tracking-[0]">
                    Employee Wellness Webinar{" "}
                  </span>

                  <span className="text-[17px]">|</span>
                </p>
              </div>
            </div>

            <div className="absolute w-[120px] h-[18px] top-12 left-[246px]">
              <div className="left-0 absolute w-[18px] h-[18px] top-0">
                <div className="relative w-5 h-5 -top-px -left-px bg-[#eef4fe] rounded-[10px] border border-solid border-[#1f74ec]">
                  <div className="absolute w-5 h-5 -top-px -left-px bg-[#eef4fe] rounded-[10px] border border-solid border-[#1f74ec]" />

                  <div className="absolute w-[9px] h-[9px] top-1 left-1 bg-white rounded-[4.5px] border-2 border-solid border-[#1f74ec]" />

                  <div className="absolute w-1.5 h-1.5 top-1.5 left-1.5 bg-[#eef4fe] rounded-[3px]" />
                </div>
              </div>

              <div className="left-[34px] absolute w-[18px] h-[18px] top-0">
                <div className="relative w-5 h-5 -top-px -left-px bg-[#eef4fe] rounded-[10px] border border-solid border-[#1f74ec]">
                  <div className="bg-[#f3eefe] border-[#9566f2] absolute w-5 h-5 -top-px -left-px rounded-[10px] border border-solid" />

                  <div className="absolute w-[9px] h-[9px] top-1 left-1 bg-[#9566f2] rounded-[4.5px]" />
                </div>
              </div>

              <div className="left-[68px] absolute w-[18px] h-[18px] top-0">
                <div className="relative w-5 h-5 -top-px -left-px bg-[#eef4fe] rounded-[10px] border border-solid border-[#1f74ec]">
                  <div className="bg-[#ddfce0] border-[#23eb31] absolute w-5 h-5 -top-px -left-px rounded-[10px] border border-solid" />

                  <div className="absolute w-[9px] h-[9px] top-1 left-1 bg-white rounded-[4.5px] border-2 border-solid border-[#23eb31]" />
                </div>
              </div>

              <div className="left-[102px] absolute w-[18px] h-[18px] top-0">
                <div className="relative w-5 h-5 -top-px -left-px bg-[#eef4fe] rounded-[10px] border border-solid border-[#1f74ec]">
                  <div className="bg-[#feefdb] border-[#f9aa3c] absolute w-5 h-5 -top-px -left-px rounded-[10px] border border-solid" />

                  <div className="absolute w-[9px] h-[9px] top-1 left-1 bg-white rounded-[4.5px] border-2 border-solid border-[#f9aa3c]" />
                </div>
              </div>
            </div>

            <div className="absolute top-11 left-6 text-[#23272c] text-[22px] [font-family:'Libre_Franklin',Helvetica] font-semibold tracking-[0] leading-[normal]">
              Ajouter un RDV
            </div>
          </div>
        </div>

        <Button
          className="!absolute !left-[1377px] !w-[172px] !top-[143px]"
          divClassName="!ml-[-4.50px]"
          frameClassName="!w-[170px]"
          text="+"
          text1="Ajouter un RDV"
          textClassName="!mr-[-4.50px]"
        />
        <div className="absolute w-[218px] h-[42px] top-[143px] left-[1135px]">
          <div className="absolute w-8 h-[30px] top-[5px] left-[186px] rounded-lg overflow-hidden border border-solid border-[#e0e3e9]">
            <div className="top-0.5 left-[11px] absolute [font-family:'Font_Awesome_6_Pro-Regular',Helvetica] font-normal text-[#888888] text-[11px] tracking-[0] leading-6 whitespace-nowrap">
              
            </div>
          </div>

          <div className="absolute w-[138px] h-[42px] top-0 left-10 bg-[#f4f5f7] rounded-[21px] overflow-hidden">
            <div className="top-3 left-4 [font-family:'Libre_Franklin',Helvetica] text-[#23272c] absolute font-medium text-sm tracking-[0] leading-[normal]">
              Septembre 2023
            </div>
          </div>

          <div className="absolute w-8 h-[30px] top-[5px] left-0 rounded-lg overflow-hidden border border-solid border-[#e0e3e9]">
            <div className="top-1 left-[7px] absolute [font-family:'Font_Awesome_6_Pro-Regular',Helvetica] font-normal text-[#888888] text-[11px] tracking-[0] leading-6 whitespace-nowrap">
              {" "}
              
            </div>
          </div>
        </div>

        <div className="absolute w-[1575px] h-[120px] top-0 left-0 bg-[#f2f2f2]">
          <Group
            className="!absolute !left-[510px] !top-[23px]"
            icBell="/img/ic-bell-1.svg"
            icChat="/img/ic-chat-1.svg"
            icSearch="/img/ic-search-1.svg"
          />
          <div className="absolute w-[265px] h-[42px] top-[39px] left-[50px]">
            <div className="absolute top-0 left-[74px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-[normal]">
              Rendez-vous
            </div>

            <img
              className="absolute w-[29px] h-[18px] top-3 left-0"
              alt="Ic menu"
              src="/img/ic-menu.png"
            />
          </div>

          <div className="w-[182px] top-[31px] left-[1340px] absolute h-[57px]">
            <div className="absolute top-[5px] left-[88px] [font-family:'Poppins',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
              Israël SILUE
            </div>

            <div className="absolute top-[34px] left-[88px] [font-family:'Poppins',Helvetica] font-normal text-[#8f8f8f] text-xs tracking-[0] leading-[normal]">
              Talents
            </div>

            <div className="w-[57px] top-0 left-0 bg-[#c4c4c4] rounded-[65px] absolute h-[57px]" />
          </div>
        </div>
      </div>

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
                  className="top-[26px] left-[76px] absolute w-7 h-7"
                  alt="Ic search"
                  src="/img/ic-search-2.svg"
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

            <div className="absolute w-[356px] h-[260px] top-[344px] left-0">
              <div className="absolute w-[347px] h-20 top-0 left-0">
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

              <Link
                className="w-[356px] h-[163px] top-12 absolute left-0 block"
                to="/rendezu45vous"
              >
                <div className="relative w-[354px] h-[163px]">
                  <div className="absolute w-[345px] h-20 top-[42px] left-0 bg-[#e0ebff]" />

                  <img
                    className="absolute w-[302px] h-[163px] top-0 left-[52px]"
                    alt="Background"
                    src="/img/background.svg"
                  />

                  <div className="absolute top-[68px] left-[149px] [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                    Rendez-vous
                  </div>

                  <img
                    className="absolute w-[21px] h-[21px] top-[71px] left-[78px]"
                    alt="Vector"
                    src="/img/vector-1.svg"
                  />
                </div>
              </Link>

              <div className="w-[347px] h-20 top-[180px] absolute left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <p className="absolute w-[164px] top-[13px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Coding game &amp; Tests techniques
                  </p>

                  <img
                    className="absolute w-7 h-7 top-[26px] left-[76px]"
                    alt="Ic news"
                    src="/img/ic-news.svg"
                  />
                </div>
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
  );
};
