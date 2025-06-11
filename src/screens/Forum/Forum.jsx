import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { ArrowSmallDown } from "../../components/ArrowSmallDown";
import { Avatar } from "../../components/Avatar";
import { BookmarkWrapper } from "../../components/BookmarkWrapper";
import { FavoriteWrapper } from "../../components/FavoriteWrapper";
import { Group } from "../../components/Group";
import { Message } from "../../components/Message";
import { Pin } from "../../components/Pin";
import { Plus } from "../../components/Plus";
import { SortSmallWrapper } from "../../components/SortSmallWrapper";
import { TrophyWrapper } from "../../components/TrophyWrapper";
import { ArrowSmallDown2 } from "../../icons/ArrowSmallDown2";
import { Customers } from "../../icons/Customers";
import { Dashboard } from "../../icons/Dashboard";
import { Notification } from "../../icons/Notification";
import { PaperPlane1 } from "../../icons/PaperPlane1";
import { Search } from "../../icons/Search";
import { Sort } from "../../icons/Sort";

//Routes
import { Profil } from "../Profil";
import { TableauDeBord } from "../TableauDeBord";
import { ForumDetails } from "../ForumDetails";
import { OffresDemploi } from "../OffresDemploi";
import { DtailsOffreDemploi } from "../DtailsOffreDemploi";
import { ListeDesTests } from "../ListeDesTests";
import {Paramtre} from "../Paramtre"
import { TestsDtails } from "../TestsDtails";
import {RsultatDeTest} from "../RsultatDeTest";
import { RendezVous } from "../RendezVous";
import { Formations } from "../Formations";
import { DtailsDeLa } from "../DtailsDeLa";
import { HomePage } from "../HomePage";

export const Forum = () => {
  return (
    <div className="relative w-[1920px] h-[1065px] bg-white overflow-hidden">
      <img
        className="absolute w-[95px] h-[21px] top-[-2467px] left-[-8172px]"
        alt="Vector"
        src="/img/vector.svg"
      />

      <div className="absolute w-[1937px] h-[1604px] top-0 left-0">
        <div className="absolute w-[1920px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm" />
        {/*begining of links*/}
        
        <div className="Routing">
        <div className="absolute w-[345px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
        
          <div className="relative w-[364px] h-[1502px] top-[102px]">
            <div className="absolute w-[345px] h-[747px] top-[755px] left-0 bg-[#d6e5fd] rounded-[0px_30px_2px_0px]" />

            <div className="absolute w-[364px] h-[865px] top-0 left-0">
            <Link
                  to="/OffresDemploi"
                >
              <div className="absolute w-[347px] h-20 top-[172px] left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-normal text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Offres d’emploi
                  </div>

                  <img
                    className="top-[26px] left-[76px] absolute w-7 h-7"
                    alt="Ic search"
                    src="/img/ic-search-1.svg"
                  />
                </div>
              </div>
              </Link>
              {/*link element*/}
              <Link
                  className="absolute w-[362px] h-[163px] top-10 left-0 block"
                  to="/Profil"
                >
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
              </Link>
              
              {/*link element*/}
              <div className="absolute w-[362px] h-[252px] top-[262px] left-0">
              <Link
                  to="/Formations"
                >
                <div className="absolute w-[347px] h-20 top-0 left-0">
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
                </Link>

                {/*link element*/}
                <Link
                  className="absolute w-[362px] h-[163px] top-10 left-0 block"
                  to="/Forum"
                >
                  <div className="relative w-[360px] h-[163px]">
                    <div className="absolute w-[345px] h-20 top-[42px] left-0 bg-[#e0ebff]" />

                    <img
                      className="absolute w-[302px] h-[163px] top-0 left-[58px]"
                      alt="Background"
                      src="/img/background.svg"
                    />

                    <div className="top-[68px] left-[149px] text-lg absolute [font-family:'Poppins',Helvetica] font-semibold text-black tracking-[0] leading-[normal]">
                      Forum
                    </div>

                    <img
                      className="absolute w-7 h-7 top-[68px] left-[76px]"
                      alt="Ic analytics"
                      src="/img/ic-analytics.svg"
                    />
                  </div>
                </Link>

                {/*link element*/}

                <div className="top-[172px] absolute w-[347px] h-20 left-0">
                <Link
                  
                  to="/RendezVous"
                >
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
                  </Link>
                </div>
              </div>

              {/*link element*/}
              <Link
                  to="/Forum"
                >
              <div className="top-[524px] absolute w-[347px] h-20 left-0">
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
              </Link>

              {/*link element*/}
              <Link
                  to="/TableauDeBord"
                >
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
              </Link>

              <Link
                  to="/Paramtre"
                >
              <div className="absolute top-[788px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                Paramètres
              </div>
              </Link>

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
        <Routes>
          {/*<Route path="/*" element={<HomePage />} />*/}
          <Route path="/Profil" element={<Profil />} />
          <Route path="/ForumDetails" element={<ForumDetails />} />
          {/*<Route path="/Forum" element={<Forum />} />*/}
          <Route path="/OffresDemploi" element={<OffresDemploi />} />
          <Route path="/DtailsOffreDemploi" element={<DtailsOffreDemploi />} />
          <Route path="/TableauDeBord" element={<TableauDeBord />} />
          <Route path="/Paramtre" element={<Paramtre />} />
          <Route path="/Formations" element={<Formations />} />
          <Route path="/DtailsDeLa" element={<DtailsDeLa />} />
          <Route path="/ListeDesTests" element={<ListeDesTests />} />
          <Route path="/TestsDtails" element={<TestsDtails />} />
          <Route path="/RsultatDeTest" element={<RsultatDeTest />} />
          <Route path="/RendezVous" element={<RendezVous />} />
        </Routes>
        
        {/*end of links*/}
        <div className="absolute w-[1575px] h-[1510px] top-[94px] left-[345px] bg-[#f2f2f2] rounded-[0px_0px_0px_38px]" />

        <div className="absolute w-[1463px] h-[60px] top-[120px] left-[400px] bg-lightwhite shadow-main-shadow">
          <div className="relative w-[1308px] h-[50px] top-2.5 left-[70px]">
            <div className="inline-flex items-center gap-[30px] absolute top-0 left-[1034px]">
              <Message className="!bg-[unset] !relative !bg-[unset]" />
              <Notification className="!relative !w-5 !h-5" color="#6C7C93" />
              <div className="inline-flex items-start gap-2.5 px-[15px] py-2.5 relative flex-[0_0_auto] bg-highlightshighlight-1 rounded-md">
                <div className="inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto]">
                  <Plus className="bg-[url(/static/img/subtract-10.svg)] !relative" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightprimary-colorsbackground text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                    Nouveau post
                  </div>
                </div>
              </div>
            </div>

            <img
              className="absolute w-[41px] h-0.5 top-[49px] -left-px"
              alt="Selected"
              src="/img/selected.svg"
            />

            <div className="inline-flex items-start gap-[30px] absolute top-2.5 left-0.5">
              <div className="relative w-[41px] h-5">
                <div className="absolute h-5 top-0 left-0 [font-family:'Manrope',Helvetica] font-bold text-highlightshighlight-1 text-base text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                  Feed
                </div>
              </div>

              <div className="relative w-[101px] h-5">
                <div className="absolute h-5 top-0 left-0 [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                  Latest Posts
                </div>
              </div>

              <div className="relative w-[89px] h-5">
                <div className="absolute h-5 top-0 left-0 [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                  Discussion
                </div>
              </div>

              <div className="relative w-[84px] h-5 mr-[-2.00px]">
                <div className="absolute h-5 top-0 left-0 [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                  Questions
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[280px] h-[1139px] top-[220px] left-[395px]">
          <div className="relative w-72 h-[1011px] -top-px -left-1">
            <img
              className="absolute w-72 h-[846px] top-0 left-0"
              alt="Rectangle"
              src="/img/rectangle-167.svg"
            />

            <div className="inline-flex flex-col items-start gap-[30px] absolute top-[181px] left-11">
              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <Dashboard className="!relative !w-5 !h-5" color="#734CC9" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-highlightshighlight-1 text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Tableau de bord
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <img
                  className="relative w-5 h-5"
                  alt="Calendar"
                  src="/img/calendar.svg"
                />

                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Badges
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <Customers className="!relative !w-5 !h-5" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Abonnés
                </div>
              </div>

              <img
                className="relative w-[200px] h-px object-cover"
                alt="Vector"
                src="/img/vector-111.svg"
              />

              <div className="inline-flex items-start gap-[15px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-sm text-right tracking-[0.28px] leading-5 whitespace-nowrap">
                  Thèmes
                </div>

                <ArrowSmallDown2
                  className="!relative !w-5 !h-5"
                  color="#6C7C93"
                />
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <Pin className="!relative" subtract="static/img/subtract-11.svg" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Épinglé
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <PaperPlane1 className="!relative !w-5 !h-[20.01px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Réponses
                </div>
              </div>

              <div className="inline-flex items-start gap-[15px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-sm text-right tracking-[0.28px] leading-5 whitespace-nowrap">
                  Categories
                </div>

                <ArrowSmallDown2
                  className="!relative !w-5 !h-5"
                  color="#6C7C93"
                />
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <div className="relative w-5 h-5">
                  <div className="relative w-3 h-3 top-1 left-1 bg-highlightshighlight-2 rounded-[3px]" />
                </div>

                <div className="text-lightsecondary text-base tracking-[0.32px] relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold leading-5 whitespace-nowrap">
                  Design
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <div className="relative w-5 h-5">
                  <div className="bg-highlightshighlight-3 relative w-3 h-3 top-1 left-1 rounded-[3px]" />
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Mobile Apps
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <div className="relative w-5 h-5">
                  <div className="bg-highlightshighlight-4 relative w-3 h-3 top-1 left-1 rounded-[3px]" />
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Infography
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <div className="relative w-5 h-5">
                  <div className="bg-highlightshighlight-5 relative w-3 h-3 top-1 left-1 rounded-[3px]" />
                </div>

                <div className="text-lightsecondary text-base tracking-[0.32px] relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold leading-5 whitespace-nowrap">
                  Coding
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <div className="relative w-5 h-5">
                  <div className="bg-highlightshighlight-6 relative w-3 h-3 top-1 left-1 rounded-[3px]" />
                </div>

                <div className="text-lightsecondary text-base tracking-[0.32px] relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold leading-5 whitespace-nowrap">
                  Testing
                </div>
              </div>

              <img
                className="relative w-[200px] h-px object-cover"
                alt="Vector"
                src="/img/vector-112.svg"
              />

              <div className="inline-flex items-start gap-[15px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-sm text-right tracking-[0.28px] leading-5 whitespace-nowrap">
                  Quick Links
                </div>

                <ArrowSmallDown />
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <FavoriteWrapper />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Favorites
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <BookmarkWrapper />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Bookmarks
                </div>
              </div>

              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <TrophyWrapper />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Ranking
                </div>
              </div>
            </div>

            <div className="absolute w-[200px] h-10 top-[41px] left-11 bg-backgroundbackground-1 rounded-md">
              <div className="inline-flex items-start gap-5 relative top-2.5 left-[15px]">
                <Search className="!relative !w-5 !h-5" color="#6C7C93" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
                  Rechercher
                </div>
              </div>
            </div>

            <div className="absolute w-[202px] h-10 top-[111px] left-11">
              <Avatar className="!bg-[unset] !bg-[100%_100%] !absolute bg-[url(/static/img/subtract-12.svg)] !left-0 !top-0" />
              <div className="absolute w-[140px] h-10 top-0 left-[60px]">
                <p className="absolute w-[134px] h-10 top-0 left-0 [font-family:'Manrope',Helvetica] font-semibold text-transparent text-base tracking-[0.32px] leading-[22px]">
                  <span className="text-[#3b3551] tracking-[0.05px]">
                    Thomas Hop
                    <br />
                  </span>

                  <span className="text-[#6f7f95] text-sm tracking-[0.04px]">
                    loops.com
                  </span>
                </p>

                <ArrowSmallDown2
                  className="!absolute !w-5 !h-5 !top-2.5 !left-[120px]"
                  color="#6F7F95"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[400px] h-5 top-[219px] left-[696px] [font-family:'Manrope',Helvetica] font-extrabold text-lightprimary text-[25px] tracking-[0.50px] leading-[30px] whitespace-nowrap">
          Actualité
        </div>

        <div className="absolute w-[211px] h-10 top-[210px] left-[1290px] bg-lightwhite rounded-md shadow-main-shadow">
          <div className="inline-flex items-start gap-[15px] absolute top-2.5 left-3">
            <Sort className="!relative !w-5 !h-5" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base tracking-[0.32px] leading-5 whitespace-nowrap">
              Le plus récent
            </div>
          </div>

          <ArrowSmallDown2
            className="!absolute !w-5 !h-5 !top-2.5 !left-44"
            color="#6F7F95"
          />
        </div>

        <img
          className="absolute w-[813px] h-[209px] top-[273px] left-[692px]"
          alt="Post"
          src="/img/post-01.png"
        />

        <img
          className="absolute w-[813px] h-[209px] top-[475px] left-[692px]"
          alt="Post"
          src="/img/post-02.png"
        />

        <img
          className="absolute w-[813px] h-[209px] top-[677px] left-[692px]"
          alt="Post"
          src="/img/post-03.png"
        />

        <img
          className="absolute w-[813px] h-[186px] top-[879px] left-[692px]"
          alt="Post"
          src="/img/post-04.png"
        />

        <img
          className="absolute w-[350px] h-[348px] top-[280px] left-[1517px]"
          alt="Visitors"
          src="/img/visitors.png"
        />

        <img
          className="absolute w-[350px] h-[348px] top-[660px] left-[1517px]"
          alt="Status"
          src="/img/status.png"
        />

        <div className="absolute w-[404px] h-[203px] top-[1041px] left-[1533px]">
          <div className="absolute w-[400px] h-[203px] top-0 left-0 bg-lightwhite rounded-[10px] shadow-main-shadow">
            <div className="absolute h-5 top-10 left-[244px] [font-family:'Manrope',Helvetica] font-semibold text-lightsecondary text-base text-right tracking-[0.32px] leading-5 whitespace-nowrap">
              Last 7 Days
            </div>

            <div className="absolute h-5 top-10 left-10 [font-family:'Manrope',Helvetica] font-bold text-lightprimary text-xl tracking-[0.40px] leading-5 whitespace-nowrap">
              Threads
            </div>

            <div className="top-[100px] inline-flex items-start gap-[15px] absolute left-10">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="bg-backgroundbackground-1 inline-flex items-start gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[6px_0px_0px_6px]">
                  <div className="text-highlightshighlight-1 text-sm text-center tracking-[0.28px] relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold leading-5 whitespace-nowrap">
                    Design
                  </div>
                </div>

                <div className="inline-flex items-start gap-2.5 px-1.5 py-0.5 relative flex-[0_0_auto] bg-highlightshighlight-1 rounded-[0px_6px_6px_0px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-lightwhite text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                    63
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="bg-[#f3fff1] inline-flex items-start gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[6px_0px_0px_6px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-highlightshighlight-2 text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                    Apps
                  </div>
                </div>

                <div className="inline-flex items-start gap-2.5 px-1.5 py-0.5 relative flex-[0_0_auto] bg-highlightshighlight-2 rounded-[0px_6px_6px_0px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-lightwhite text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                    12
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="bg-[#ea696933] inline-flex items-start gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[6px_0px_0px_6px]">
                  <div className="text-highlightshighlight-6 text-sm text-center tracking-[0.28px] relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold leading-5 whitespace-nowrap">
                    Testing
                  </div>
                </div>

                <div className="inline-flex items-start gap-2.5 px-1.5 py-0.5 relative flex-[0_0_auto] bg-highlightshighlight-6 rounded-[0px_6px_6px_0px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-lightwhite text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                    29
                  </div>
                </div>
              </div>
            </div>

            <div className="top-[139px] inline-flex items-start gap-[15px] absolute left-10">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="bg-[#ecf9f7] inline-flex items-start gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[6px_0px_0px_6px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#72c5bb] text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                    Prototyping
                  </div>
                </div>

                <div className="inline-flex items-start gap-2.5 px-1.5 py-0.5 relative flex-[0_0_auto] bg-highlightshighlight-4 rounded-[0px_6px_6px_0px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-lightwhite text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                    16
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="bg-[#fbf0d4] inline-flex items-start gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] rounded-[6px_0px_0px_6px]">
                  <div className="text-highlightshighlight-5 text-sm text-center tracking-[0.28px] relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold leading-5 whitespace-nowrap">
                    Coding
                  </div>
                </div>

                <div className="inline-flex items-start gap-2.5 px-1.5 py-0.5 relative flex-[0_0_auto] bg-highlightshighlight-5 rounded-[0px_6px_6px_0px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-lightwhite text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                    28
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SortSmallWrapper />
        </div>

        <div className="absolute w-[1575px] h-[120px] top-0 left-[345px] bg-[#f2f2f2]">
          <Group
            className="!absolute !left-[510px] !top-[23px]"
            icChat="/img/ic-chat-1.svg"
            icSearch="/img/ic-search-2.svg"
          />
          <div className="absolute w-[168px] h-[42px] top-[39px] left-[50px]">
            <div className="top-0 left-[74px] text-[28px] absolute [font-family:'Poppins',Helvetica] font-semibold text-black tracking-[0] leading-[normal]">
              Forum
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

      <img
        className="absolute w-[840px] h-[201px] top-[-5026px] left-[-7091px]"
        alt="Post"
        src="/img/post-05.png"
      />
    </div>
  );
};
