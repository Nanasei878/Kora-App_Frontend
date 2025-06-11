import React, { useEffect, useState } from "react";
import { Group } from "../../components/Group";
import { useParams } from "react-router-dom";

export const DtailsOffreDemploi = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    //const id = parseInt(jobId, 10);
    fetch(`http://localhost:3001/jobs/${jobId}`)
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => setError("Error loading job details:", error));
  }, [jobId]);  

  if (!job) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }*/


  useEffect(() => {
    // Fetch job details using the jobId
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/jobs/${jobId}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Job not found");
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }
        const data = await response.json();
        setJob(data);
        setError(null); // Clear any previous error
      } catch (err) {
        console.error("Error loading job details:", err);
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading once fetch is complete
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator while fetching
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Show error message if there's an error
  }

  if (!job) {
    return <p>Job details not available.</p>; // Show fallback if no job data
  }

  return (
    <div className="relative w-[1920px] h-[1085px] bg-white overflow-hidden">
      <img
        className="absolute w-[95px] h-[21px] top-[-2467px] left-[3917px]"
        alt="Vector"
        src="/img/image.svg"
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
                <div className="absolute w-[379px] h-[42px] top-[39px] left-[50px]">
                  <div className="absolute top-0 left-[74px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-[normal]">
                    Détails offre d’emploi
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

        <div className="absolute w-[948px] h-[904px] top-[137px] left-[395px]">
          <div className="relative h-[908px] bg-[url(./static/img/background.svg)] bg-[100%_100%]">

            {/* Job details */}
            <div className="absolute w-full min-h-screen bg-white p-8">
              <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-blue-500 font-medium mb-2">{job.salary}</p>
                <p className="text-gray-600 mb-2">{job.location}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
              </div>
            </div>


          </div>
        </div>

        <div className="absolute w-[486px] h-[454px] top-[442px] left-[1381px]">
          <div className="relative w-[482px] h-[454px] bg-white rounded-[20px] shadow-[0px_0px_70px_#00000014]">
            <div className="absolute w-[441px] h-[49px] top-[154px] left-[22px]">
              <div className="relative w-[439px] h-[49px] bg-[#3636360f] rounded-[5px]">
                <input className="absolute top-[7px] left-[17px] [font-family:'Montserrat',Helvetica] font-medium text-[#5b5b5b] text-[11px] tracking-[0] leading-[27.5px] whitespace-nowrap" placeholder="Numéro de téléphone" type="text" />
               </div>   
            </div>

            <div className="absolute w-[441px] h-[49px] top-[284px] left-[21px]">
              <div className="relative w-[439px] h-[49px] bg-[#3636360f] rounded-[5px]">
                <input className="absolute w-[35px] top-[7px] left-3.5 [font-family:'Montserrat',Helvetica] font-medium text-[#5b5b5b] text-[11px] tracking-[0] leading-[27.5px]" placeholder="CV" type="file" required />
                  

                <img
                  className="absolute w-1.5 h-1 top-[22px] left-[419px]"
                  alt="Vector"
                  src="/img/vector-3.svg"
                />
              </div>
            </div>

            <div className="absolute w-[441px] h-[49px] top-[219px] left-[22px]">
              <div className="relative w-[439px] h-[49px] bg-[#3636360f] rounded-[5px]">
                <input className="absolute top-[7px] left-[17px] [font-family:'Montserrat',Helvetica] font-medium text-[#5b5b5b] text-[11px] tracking-[0] leading-[27.5px] whitespace-nowrap" placeholder="Email" type="Email" />
                  
                
              </div>
            </div>

            <div className="absolute w-[439px] h-[49px] top-6 left-[21px] bg-[#3636360f] rounded-[5px]">
              <input className="absolute top-3 left-[17px] [font-family:'Montserrat',Helvetica] font-medium text-[#5b5b5b] text-[11px] tracking-[0] leading-[27.5px] whitespace-nowrap" placeholder="Nom" type="text" />
               
            </div>

            <div className="absolute w-[439px] h-[49px] top-[89px] left-[21px] bg-[#3636360f] rounded-[5px]">
              <input className="absolute top-[11px] left-[18px] [font-family:'Montserrat',Helvetica] font-medium text-[#5b5b5b] text-[11px] tracking-[0] leading-[27.5px] whitespace-nowrap" placeholder="Prénoms" type="text"/>
                
            </div>

            <div className="absolute w-[440px] h-[43px] top-[377px] left-[22px]">
              <div className="relative w-[438px] h-[43px] bg-[#005dff] rounded-[26px]">
                <div className="absolute top-2 left-[177px] [font-family:'Montserrat',Helvetica] font-bold text-white text-sm tracking-[0] leading-[27.5px] whitespace-nowrap" type="submit">
                  POSTULER
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[416px] h-[267px] top-[137px] left-[1381px]">
          <div className="top-36 left-[227px] absolute w-[193px] h-[123px]">
            <div className="relative w-[189px] h-[123px] bg-white rounded-[20px] shadow-[0px_4px_4px_#0000000f]">
              <img
                className="absolute w-[37px] h-[37px] top-12 left-[111px]"
                alt="Eye"
                src="/img/eye-1.svg"
              />

              <div className="absolute top-[23px] left-[23px] [font-family:'Poppins',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
                Profile Viewed
              </div>

              <div className="absolute top-12 left-[23px] [font-family:'Poppins',Helvetica] font-semibold text-[#1b1b1b] text-[28px] tracking-[0] leading-[normal]">
                456k
              </div>
            </div>
          </div>

          <div className="top-0 left-0 absolute w-[193px] h-[123px]">
            <div className="relative w-[189px] h-[123px] bg-white rounded-[20px] shadow-[0px_9px_19px_#0000001a]">
              <img
                className="absolute w-9 h-9 top-[51px] left-[78px]"
                alt="Ic chat"
                src="/img/ic-chat-2.svg"
              />

              <div className="absolute top-[23px] left-[23px] [font-family:'Poppins',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
                Unread Messages
              </div>

              <div className="top-12 left-[23px] text-[#1b1b1b] text-[28px] absolute [font-family:'Poppins',Helvetica] font-semibold tracking-[0] leading-[normal]">
                28
              </div>
            </div>
          </div>

          <div className="top-0 left-[222px] absolute w-[193px] h-[123px]">
            <div className="relative w-[189px] h-[123px] bg-white rounded-[20px] shadow-[0px_4px_0px_#0000000a]">
              <div className="absolute w-[131px] h-[60px] top-[23px] left-[23px]">
                <img
                  className="absolute w-[37px] h-[37px] top-[23px] left-[66px]"
                  alt="Suitcase"
                  src="/img/suitcase-1.svg"
                />

                <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
                  Application Sent
                </div>
              </div>

              <div className="top-12 left-[23px] text-[#1b1b1b] text-[28px] absolute [font-family:'Poppins',Helvetica] font-semibold tracking-[0] leading-[normal]">
                651
              </div>
            </div>
          </div>

          <div className="top-36 left-0 absolute w-[193px] h-[123px]">
            <div className="relative w-[189px] h-[123px] bg-white rounded-[20px] shadow-[0px_4px_0px_#0000000a] bg-[url(./static/img/mask-group.png)] bg-[100%_100%]">
              <img
                className="absolute w-[37px] h-[37px] top-12 left-[84px]"
                alt="Calendar silhouette"
                src="/img/calendar-silhouette-1-1.svg"
              />

              <div className="absolute top-[23px] left-[23px] [font-family:'Poppins',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[normal]">
                Interviewed
              </div>

              <div className="top-12 left-[23px] text-[#1b1b1b] text-[28px] absolute [font-family:'Poppins',Helvetica] font-semibold tracking-[0] leading-[normal]">
                261
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[345px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
          <div className="relative w-[363px] h-[1502px] top-[102px]">
            <div className="absolute w-[345px] h-[747px] top-[755px] left-0 bg-[#d6e5fd] rounded-[0px_30px_2px_0px]" />

            <div className="absolute w-[363px] h-[865px] top-0 left-0">
              <div className="absolute w-[361px] h-[250px] top-[92px] left-0">
                <div className="absolute w-[361px] h-[163px] top-[38px] left-0">
                  <div className="relative w-[359px] h-[163px]">
                    <div className="absolute w-[345px] h-20 top-[42px] left-0 bg-[#e0ebff]" />

                    <img
                      className="absolute w-[302px] h-[163px] top-0 left-[57px]"
                      alt="Background"
                      src="/img/background.svg"
                    />

                    <div className="absolute top-[68px] left-[149px] [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                      Offres d’emploi
                    </div>

                    <img
                      className="absolute w-7 h-7 top-[68px] left-[76px]"
                      alt="Ic search"
                      src="/img/ic-search-2.svg"
                    />
                  </div>
                </div>

                <div className="absolute w-[347px] h-20 top-[170px] left-0">
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

                <div className="absolute w-60 h-[60px] top-0 left-[60px]">
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
              </div>

              <div className="absolute w-[347px] h-20 top-0 left-0">
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
              </div>

              <div className="absolute w-[347px] h-20 top-[344px] left-0">
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
                src="/img/vector-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
