import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Group } from "../../components/Group";

export const OffresDemploi = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error loading job data:", error));
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const displayedJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="./img/ic-menu.png" alt="Menu" className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">Offres d’emploi</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Group icChat="./img/ic-chat-1.svg" icSearch="./img/ic-search-1.svg" />
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div>
              <p className="font-semibold">Israël SILUE</p>
              <p className="text-gray-500 text-sm">Talents</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center p-8 bg-[#e0ebff]">
        <div className="bg-gray-100 rounded-lg shadow-md w-full max-w-6xl p-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700">Affichage de {displayedJobs.length} sur {jobs.length} données</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Récent</button>
              <button className="bg-gray-300 px-4 py-2 rounded">Salaire</button>
              <button className="bg-gray-300 px-4 py-2 rounded">Détails</button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-3 gap-6">
            {displayedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-medium mb-2">{job.title}</h2>
                <p className="text-sm text-gray-600 mb-1">{job.company}</p>
                <p className="text-blue-500 font-medium mb-1">{job.salary}</p>
                <p className="text-sm mb-1">{job.location}</p>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full inline-block">
                  {job.type}
                </span>
                <p className="text-gray-700 mt-4">{job.description.split('. ')[0]}.</p>
                <Link
                  to={`/DtailsOffreDemploi/${job.id}`}
                  className="text-blue-500 underline mt-2 block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
                }`}
            >
              Previous
            </button>
            <span>
              Page {currentPage} sur {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Sidebar */}
      <div className="absolute w-[345px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
        <div className="relative w-[363px] h-[1502px] top-[102px]">
          <div className="absolute w-[345px] h-[747px] top-[755px] left-0 bg-[#d6e5fd] rounded-[0px_30px_2px_0px]" />

          <div className="absolute w-[363px] h-[865px] top-0 left-0">
            <div className="absolute w-[361px] h-[250px] top-[92px] left-0">
              <Link
                className="absolute w-[361px] h-[163px] top-[38px] left-0 block"
                to="/offres-du8217emploi"
              >
                <div className="relative w-[359px] h-[163px]">
                  <div className="absolute w-[345px] h-20 top-[42px] left-0 bg-[#e0ebff]" />

                  <img
                    className="absolute w-[302px] h-[163px] top-0 left-[57px]"
                    alt="Background"
                    src="./img/background.svg"
                  />

                  <div className="absolute top-[68px] left-[149px] [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                    Offres d’emploi
                  </div>

                  <img
                    className="absolute w-7 h-7 top-[68px] left-[76px]"
                    alt="Ic search"
                    src="./img/ic-search-3.svg"
                  />
                </div>
              </Link>

              <div className="absolute w-[347px] h-20 top-[170px] left-0">
                <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                  <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                    Formations
                  </div>

                  <img
                    className="absolute w-7 h-7 top-[26px] left-[76px]"
                    alt="Ic applications"
                    src="./img/ic-applications.svg"
                  />
                </div>
              </div>

              <div className="absolute w-60 h-[60px] top-0 left-[60px]">
                <div className="absolute top-4 left-[89px] [font-family:'Poppins',Helvetica] font-normal text-[#707070] text-lg tracking-[0] leading-[normal]">
                  Tableau de bord
                </div>

                <div className="absolute w-[60px] h-[60px] top-0 left-0 rounded-[18px]">
                  <img
                    className="absolute w-7 h-7 top-4 left-4"
                    alt="Ic home"
                    src="./img/ic-home.svg"
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
                  src="./img/vector.svg"
                />
              </div>
            </div>

            <div className="absolute w-[347px] h-20 top-[344px] left-0">
              <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                  Forum
                </div>

                <img
                  className="absolute w-7 h-7 top-[26px] left-[76px]"
                  alt="Ic analytics"
                  src="./img/ic-analytics.svg"
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
                  src="./img/vector-1.svg"
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
                  src="./img/ic-news.svg"
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
              src="./img/vector-2.svg"
            />

            <img
              className="absolute w-[27px] h-[15px] top-[844px] left-[72px]"
              alt="Vector"
              src="./img/vector-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
