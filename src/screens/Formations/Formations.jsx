import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { Group } from "../../components/Group";
import { StarWrapper } from "../../components/StarWrapper";
import { TypePrimaryIcon } from "../../components/TypePrimaryIcon";
import { ArrowDown2 } from "../../icons/ArrowDown2";
import { ArrowDown3 } from "../../icons/ArrowDown3";
import { Buildings } from "../../icons/Buildings";
import { Calendar } from "../../icons/Calendar";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { Filter } from "../../icons/Filter";
import { Location } from "../../icons/Location";
import { Sort } from "../../icons/Sort";
import { Star4 } from "../../icons/Star4";
import React, { useState, useEffect } from "react";


//Routes
//import { Profil } from "../Profil";
import { TableauDeBord } from "../TableauDeBord";
import { ForumDetails } from "../ForumDetails";
import { OffresDemploi } from "../OffresDemploi";
import { DtailsOffreDemploi } from "../DtailsOffreDemploi";
import { ListeDesTests } from "../ListeDesTests";
import { Paramtre } from "../Paramtre"
import { TestsDtails } from "../TestsDtails";
import { RsultatDeTest } from "../RsultatDeTest";
import { RendezVous } from "../RendezVous";
//import { Formations } from "../Formations";
import { DtailsDeLa } from "../DtailsDeLa";
import { Forum } from "../Forum";

const ITEMS_PER_PAGE = 9;
export const Formations = () => {

  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from a JSON file or API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/courses");
      const data = await response.json();
      setCourses(data);
    };
    fetchData();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCourses = courses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };



  return (
    <div className="relative w-[1920px] h-[1225px] bg-[#ffffff] overflow-hidden">
      <img
        className="absolute w-[95px] h-[21px] top-[-2467px] left-[-83px]"
        alt="Vector"
        src="/img/vector-3.svg"
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
                <div className="absolute w-[239px] h-[42px] top-[39px] left-[50px]">
                  <div className="top-0 left-[74px] text-[28px] absolute [font-family:'Poppins',Helvetica] font-semibold text-[#000000] tracking-[0] leading-[normal]">
                    Formations
                  </div>

                  <img
                    className="absolute w-[29px] h-[18px] top-3 left-0"
                    alt="Ic menu"
                    src="/img/ic-menu.png"
                  />
                </div>

                <div className="w-[182px] top-[31px] left-[1340px] absolute h-[57px]">
                  <div className="absolute top-[5px] left-[88px] [font-family:'Poppins',Helvetica] font-semibold text-[#000000] text-base tracking-[0] leading-[normal]">
                    Israël SILUE
                  </div>

                  <div className="absolute top-[34px] left-[88px] [font-family:'Poppins',Helvetica] font-normal text-[#8f8f8f] text-xs tracking-[0] leading-[normal]">
                    Talents
                  </div>

                  <div className="w-[57px] top-0 left-0 bg-[#c4c4c4] rounded-[65px] absolute h-[57px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[1488px] min-h-[1204px] items-start gap-8 p-8 absolute top-[122px] left-[375px] bg-[color:var(--color-base-base-value-color-white)]">
          <div className="flex-col items-start gap-[32.06px] flex-[0_0_auto] inline-flex relative">
            <div className="relative w-[1424px] h-[54.05px]">
              <div className="gap-[13.36px] p-[16.03px] absolute top-0 left-0 bg-[#ffffff] rounded-[10.69px] border-[1.34px] border-solid inline-flex items-start border-primaryneutral-200">
                <Buildings className="!relative !w-[21.37px] !h-[21.37px]" />
              </div>

              <div className="inline-flex items-center justify-center gap-[32.06px] pl-[18.7px] pr-[13.36px] py-[13.36px] absolute top-0 left-[69px] rounded-[10.69px] border-[1.34px] border-solid border-primaryneutral-200">
                <div className="relative w-fit mt-[-1.34px] [font-family:'Urbanist',Helvetica] font-semibold text-primaryneutral-900 text-[18.7px] tracking-[0] leading-[26.2px] whitespace-nowrap">
                  Formation
                </div>

                <ArrowDown2 className="!relative !w-[21.37px] !h-[21.37px]" />
              </div>

              <div className="inline-flex items-center justify-center gap-[32.06px] pl-[18.7px] pr-[13.36px] py-[13.36px] absolute top-0 left-[406px] rounded-[10.69px] border-[1.34px] border-solid border-primaryneutral-200">
                <div className="relative w-[124.23px] mt-[-1.34px] [font-family:'Urbanist',Helvetica] font-semibold text-primaryneutral-500 text-[18.7px] tracking-[0] leading-[26.2px]">
                  Date
                </div>

                <ArrowDown2 className="!relative !w-[21.37px] !h-[21.37px]" />
              </div>

              <div className="inline-flex items-center justify-center gap-[53.43px] pl-[18.7px] pr-[13.36px] py-[13.36px] absolute top-0 left-[739px] rounded-[10.69px] border-[1.34px] border-solid border-primaryneutral-200">
                <div className="relative w-[128.24px] mt-[-1.34px] [font-family:'Urbanist',Helvetica] font-semibold text-primaryneutral-500 text-[18.7px] tracking-[0] leading-[26.2px]">
                  Free
                </div>

                <ArrowDown2 className="!relative !w-[21.37px] !h-[21.37px]" />
              </div>

              <div className="gap-[13.36px] p-[16.03px] absolute top-0 left-[337px] bg-[#ffffff] rounded-[10.69px] border-[1.34px] border-solid inline-flex items-start border-primaryneutral-200">
                <Calendar className="!relative !w-[21.37px] !h-[21.37px]" />
              </div>

              <div className="gap-[13.36px] p-[16.03px] absolute top-0 left-[669px] bg-[#ffffff] rounded-[10.69px] border-[1.34px] border-solid inline-flex items-start border-primaryneutral-200">
                <Location className="!relative !w-[21.37px] !h-[21.37px]" />
              </div>

              <div className="gap-[13.36px] p-[16.03px] absolute top-0 left-[1371px] rounded-[10.69px] border-[1.34px] border-solid inline-flex items-start border-primaryneutral-200">
                <Sort className="!relative !w-[21.37px] !h-[21.37px]" />
              </div>

              <TypePrimaryIcon
                className="!rounded-[10.69px] !gap-[13.36px] !px-[21.37px] !py-[12.02px] !flex !absolute !left-[1027px] !bg-[#4a74ea] !w-[191px] !top-0"
                divClassName="!mt-[-1.34px] !text-[#ffffff] !tracking-[var(--bold-type-16-letter-spacing)] !text-[length:var(--bold-type-16-font-size)] ![font-style:var(--bold-type-16-font-style)] ![white-space:unset] !font-[number:var(--bold-type-16-font-weight)] !font-bold-type-16 !leading-[var(--bold-type-16-line-height)]"
                text="Rechercher"
              />
            </div>

            <div className="relative w-[1424px] h-[1.34px] bg-primaryneutral-100" />

          </div>

          <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto] mb-[-487.50px]">
            <div className="flex flex-col items-start gap-5 relative flex-1 grow">
              

{/* Pagination */}
              <div className=" flex flex-col items-center w-full bg-white p-8 overflow-y-scroll h-[600px]">
      {/* Courses Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg ">
        {paginatedCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col items-start p-4 bg-white shadow-md rounded-lg"
          >
            {/* Course Image */}
            <div
              className="w-full h-48 bg-gray-200 rounded-lg"
              style={{
                backgroundImage: `url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Course Details */}
            <div className="flex flex-col mt-4">
              <div className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
                {course.category}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
              <div className="flex items-center justify-between mt-2 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Star4 className="w-4 h-4 text-yellow-400" />
                  <span className="ml-1">{course.rating} ({course.reviews} reviews)</span>
                </div>
                <span className="font-bold text-gray-900">${course.price.toFixed(2)}</span>
              </div>
            </div>
            {/* Subscribe Button */}
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600"
              onClick={() => alert(`Subscribed to: ${course.title}`)}
            >
              S’inscrire
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className=" flex items-center justify-between mt-8 w-full max-w-screen-lg">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages ? "bg-gray-200 text-gray-400" : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
              </div>
            </div>

            
          </div>
        </div>



        <div className="absolute w-[345px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
          <div className="relative w-[363px] h-[1502px] top-[102px]">
            <div className="absolute w-[345px] h-[747px] top-[755px] left-0 bg-[#d6e5fd] rounded-[0px_30px_2px_0px]" />

            <div className="absolute w-[363px] h-[865px] top-0 left-0">
              <div className="absolute w-[361px] h-[252px] top-[172px] left-0">
                <Link to="/OffresDemploi" className="absolute w-[347px] h-20 top-0 left-0">
                  <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                    <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                      Offres d’emploi
                    </div>

                    <img
                      className="top-[26px] left-[76px] absolute w-7 h-7"
                      alt="Ic search"
                      src="/img/ic-search-2.svg"
                    />
                  </div>
                </Link>

                <Link
                  className="absolute w-[361px] h-[163px] top-[51px] left-0 block"
                >
                  <div className="relative w-[359px] h-[163px]">
                    <div className="absolute w-[345px] h-20 top-[39px] left-0 bg-[#e0ebff]" />

                    <img
                      className="absolute w-[302px] h-[163px] top-0 left-[57px]"
                      alt="Background"
                      src="/img/background.svg"
                    />

                    <div className="top-[65px] left-[149px] text-lg absolute [font-family:'Poppins',Helvetica] font-semibold text-[#000000] tracking-[0] leading-[normal]">
                      Formations
                    </div>

                    <img
                      className="absolute w-7 h-7 top-[65px] left-[76px]"
                      alt="Ic applications"
                      src="/img/ic-applications.svg"
                    />
                  </div>
                </Link>

                <Link to="/Forum" className="absolute w-[347px] h-20 top-[172px] left-0">
                  <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                    <div className="top-[26px] left-[149px] text-[#707070] text-lg leading-[normal] absolute [font-family:'Poppins',Helvetica] font-medium tracking-[0]">
                      Forum
                    </div>

                    <img
                      className="absolute w-7 h-7 top-[26px] left-[76px]"
                      alt="Ic analytics"
                      src="/img/ic-analytics.svg"
                    />
                  </div>
                </Link>
              </div>

              <Link  className="absolute w-[347px] h-20 top-0 left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Profil utilisateur
                  </div>

                  <img
                    className="absolute w-[19px] h-[19px] top-[30px] left-[81px]"
                    alt="Vector"
                    src="/img/vector.svg"
                  />
                </div>
              </Link>

              <Link to="/RendezVous" className="top-[434px] absolute w-[347px] h-20 left-0">
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

              <Link className="top-[524px] absolute w-[347px] h-20 left-0">
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
              </Link>

              <Link to="/TableauDeBord" className="absolute w-60 h-[60px] top-[92px] left-[60px]">
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
              </Link>

              <Link to="/Parametres" className="absolute top-[788px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                Paramètres
              </Link>

              <Link className="absolute top-[838px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                Déconnection
              </Link>

              <img
                className="absolute w-[27px] h-[27px] top-[792px] left-[75px]"
                alt="Vector"
                src="/img/vector-2.svg"
              />

              <img
                className="absolute w-[27px] h-[15px] top-[844px] left-[72px]"
                alt="Vector"
                src="/img/vector-3-2.svg"
              />
            </div>
          </div>

          <Routes>
                    {/*<Route path="/*" element={<HomePage />} />*/}
            {/*<Route path="/Profil" element={<Profil />} />*/}
                    <Route path="/ForumDetails" element={<ForumDetails />} />
                    <Route path="/Forum" element={<Forum />} />
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



        </div>
      </div>
    </div>
  );
};
