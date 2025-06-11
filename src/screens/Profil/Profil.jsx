import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { Group } from "../../components/Group";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileAsync, createProfileAsync, updateProfileAsync } from '../../reducers/profileSlice';

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
import { Formations } from "../Formations";
import { DtailsDeLa } from "../DtailsDeLa";
import { Forum } from "../Forum";
 


export const Profil = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  console.log('Redux Profile State:', profile);

  const [formState, setFormState] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: '',
    aboutMe: '',
    avatar: '',
    profile: {
      experiences: [],
      skills: [],
      certifications: [],
    },
    availability: '',
  address: {
      country: '',
      city: '',
      postalCode: '',
      address: '',
    },
    contact: {
      phoneNumber: '',
      whatsapp: '',
    },
    portfolio: {
      linkedin: '',
      github: '',
      facebook: '',
      youtube: '',
      huggingface: '',
    },
    socialPresence: {
      followers: 0,
      following: 0,
    },
  });

  useEffect(() => {
    // Fetch the profile when the component mounts
    dispatch(fetchProfileAsync());
  }, [dispatch]);

  useEffect(() => {
    // Set the form state when the profile is fetched from Redux
    setFormState(profile);
  }, [profile]);

  // Log to ensure the profile is fetched
  console.log('Profile data:', profile);

  // Render a loading message or default values if profile data is not yet loaded
  if (!profile || Object.keys(profile).length === 0) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');

    if (field) {
      setFormState((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: value,
        },
      }));
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (profile.username) { // Check if profile has a username (ID)
        // Update the profile if it already exists
        dispatch(updateProfileAsync({...formState, username: profile.username}));
        console.log('Form state (Update):', formState);
    } else {
        // Create a new profile if no profile exists
        dispatch(createProfileAsync(formState));
        console.log('Form state (Create):', formState);
    }
};

  return (
    <div className="relative w-[1920px] h-[1676px] bg-white overflow-hidden">
       <form onSubmit={handleSubmit}>
      <img className="absolute w-[95px] h-[21px] top-[-2467px] left-[8130px]" alt="Vector" src="/img/vector.png" />
      <div className="absolute w-[1920px] h-[1697px] top-0 left-0">
        <div className="relative h-[1697px]">
          <div className="absolute w-[1920px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm" />
          <div className="absolute w-[1575px] h-[1578px] top-[98px] left-[345px] bg-[#f2f2f2] rounded-[0px_0px_0px_38px]" />
          <div className="absolute w-[1482px] h-[1487px] top-[210px] left-[395px]">
            <div className="absolute w-[1104px] h-[1487px] top-0 left-0 bg-white rounded-[20px]">
              <div className="absolute w-[1048px] h-[305px] top-[124px] left-[29px]">
                <div className="absolute w-[333px] h-[109px] top-[57px] left-px">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Prénom
                  </div>
                  <input className="top-[62px] text-lg absolute left-0 [font-family:'Poppins',Helvetica] font-medium text-black tracking-[0] leading-[normal] border-none" name="firstName" value={formState.firstName} onChange={handleChange}/>
                  
                </div>
                <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                  GÉNÉRAL
                </div>
                <div className="absolute w-[333px] h-[109px] top-[57px] left-[359px]">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Deuxième prénom
                  </div>
                  <input className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="middleName" value={formState.middleName} onChange={handleChange}/>
                    
                </div>
                <div className="absolute w-[333px] h-[110px] top-[57px] left-[717px]">
                  <div className="absolute w-[329px] h-0.5 top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Nom de famille
                  </div>
                  <input className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="lastName" value={formState.lastName} onChange={handleChange}/>
                  
                    
                  
                </div>
                <div className="absolute w-[333px] h-[109px] top-[196px] left-px">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Nom d&#39;utilisateur
                  </div>
                  <input type="text" className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="username" value={formState.username} onChange={handleChange}/>
                    
      
                </div>
                <div className="absolute w-[335px] h-[109px] top-[196px] left-[359px]">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="left-[252px] absolute top-[62px] [font-family:'Poppins',Helvetica] font-semibold text-[#005dff] text-lg tracking-[0] leading-[normal]">
                    Montrer
                  </div>
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Mot de passe
                  </div>
                  <input type="password" className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="password" value={formState.password} onChange={handleChange}/>
                    
                 
                </div>
                <div className="absolute w-[335px] h-[109px] top-[196px] left-[717px]">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <p className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Retaper le mot de passe
                  </p>
                  <input type="password" className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="password" value={formState.password} onChange={handleChange}/>
                    
                  
                  <div className="left-[244px] absolute top-[62px] [font-family:'Poppins',Helvetica] font-semibold text-[#005dff] text-lg tracking-[0] leading-[normal]">
                    Montrer
                  </div>
                </div>
                <div className="absolute w-[945px] h-px top-[13px] left-[100px] bg-[#e6e6e6]" />
              </div>
              <div className="absolute w-[1048px] h-[305px] top-[502px] left-[29px]">
                <div className="absolute w-[333px] h-[109px] top-[57px] left-px">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <img className="absolute w-6 h-6 top-[66px] left-6" alt="Telephone" src="/img/telephone-1.svg" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Téléphone portable
                  </div>
                  <input className="absolute top-[63px] left-[77px] [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="contact.phoneNumber" value={formState.contact.phoneNumber} onChange={handleChange}/>
                    
                  
                </div>
                <div className="absolute w-[333px] h-[109px] top-[196px] left-px">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Addresse
                  </div>
                  <input className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="address.address" value={formState.address.address} onChange={handleChange}/>
                    
                
                </div>
                <div className="absolute w-[333px] h-[109px] top-[196px] left-[358px]">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-white rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <img
                    className="left-[281px] absolute w-[17px] h-[17px] top-[68px]"
                    alt="Ic chevron"
                    src="/img/ic-chevron-1.svg"
                  />
                  <div className="top-0 left-0 font-medium text-[#505050] text-base absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                    Ville
                  </div>
                  <input className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="address.address" value={formState.address.address} onChange={handleChange} />
                    
                 
                  
                </div>
                <div className="absolute w-[333px] h-[109px] top-[196px] left-[716px]">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-white rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <img
                    className="left-[276px] absolute w-[17px] h-[17px] top-[68px]"
                    alt="Ic chevron"
                    src="/img/ic-chevron-1.svg"
                  />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Pays
                  </div>
                  <input className="absolute top-[62px] left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="country" value={formState.address.country} onChange={handleChange}/>
                   
                </div>
                
                <div className="top-0 left-0 font-semibold text-black text-lg absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                  CONTACT
                </div>
                <div className="absolute w-[333px] h-[109px] top-[57px] left-[359px]">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Whatsapp
                  </div>
                  <input className="absolute top-[62px] left-[68px] [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="contact.whatsapp" value={formState.contact.whatsapp} onChange={handleChange} />
                    
                  
                  <img className="absolute w-6 h-6 top-16 left-6" alt="Whatsapp" src="/img/whatsapp-1.svg" />
                </div>
                <div className="absolute w-[333px] h-[109px] top-[57px] left-[717px]">
                  <div className="absolute w-[329px] h-px top-[108px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]" />
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Email
                  </div>
                  <input className="absolute top-[62px] left-[76px] [font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] border-none" name="email" value={formState.email} onChange={handleChange}/>
                    
                  <img className="absolute w-6 h-6 top-16 left-[29px]" alt="Email" src="/img/email-1-1-1.svg" />
                </div>
                <div className="absolute w-[924px] h-px top-[13px] left-[121px] bg-[#e6e6e6]" />
              </div>
              <div className="absolute w-[1047px] h-[268px] top-[880px] left-[29px]">
                <div className="absolute w-[1048px] h-[211px] top-[57px] left-px">
                <div className="absolute w-[1044px] h-[170px] top-[41px] left-0 bg-[#fbfbfb] rounded-[20px] border border-solid border-[#c2c2c2]">
  <textarea
    className="absolute w-[996px] top-[21px] left-6 [font-family:'Poppins',Helvetica] font-normal text-[#0b0b0bb2] text-base tracking-[0] leading-[normal] bg-transparent outline-none resize-none border-none"
    rows="4"
    value={formState.aboutMe || ''} // Assuming this is the field you want to bind to
    onChange={handleChange}
    name="aboutMe" // Ensure this matches the field in your form state
  />
</div>

                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Parlez-moi de vous
                  </div>
                </div>
                <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                  À PROPOS DE MOI
                </div>
                <div className="absolute w-[874px] h-px top-[13px] left-[171px] bg-[#e6e6e6]" />
              </div>
              <div className="absolute w-[1052px] h-[216px] top-[1217px] left-7">
                <div className="top-[60px] left-0 absolute w-[489px] h-[62px]">
                  <div className="absolute w-[395px] h-[26px] top-9 left-[90px]">
                    <div className="absolute w-[395px] h-2.5 top-2 left-0 bg-[#eeeeee] rounded-[20px]" />
                    <div className="w-[270px] absolute h-2.5 top-2 left-0 bg-[#005dff] rounded-[20px]" />
                    <div className="left-[247px] absolute w-[26px] h-[26px] top-0 bg-[#005dff] rounded-[5px]" />
                  </div>
                  <div className="absolute top-[3px] left-[90px] [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Web developper
                  </div>
                  <div className="absolute w-[62px] h-[62px] top-0 left-0 rounded-[70px] border border-solid border-[#f3eff8]">
                    <div className="top-[18px] left-3.5 text-[#005dff] text-right absolute [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
                      78%
                    </div>
                  </div>
                </div>
                <div className="top-[154px] left-0 absolute w-[489px] h-[62px]">
                  <div className="absolute w-[395px] h-[26px] top-9 left-[90px]">
                    <div className="absolute w-[395px] h-2.5 top-2 left-0 bg-[#eeeeee] rounded-[20px]" />
                    <div className="w-[322px] absolute h-2.5 top-2 left-0 bg-[#005dff] rounded-[20px]" />
                    <div className="left-[312px] absolute w-[26px] h-[26px] top-0 bg-[#005dff] rounded-[5px]" />
                  </div>
                  <div className="absolute top-[3px] left-[90px] [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    UI Design
                  </div>
                  <div className="absolute w-[62px] h-[62px] top-0 left-0 rounded-[70px] border border-solid border-[#f3eff8]">
                    <div className="top-[18px] left-[13px] text-[#005dff] text-right absolute [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
                      89%
                    </div>
                  </div>
                </div>
                <div className="top-[60px] left-[561px] absolute w-[489px] h-[62px]">
                  <div className="absolute w-[395px] h-[26px] top-9 left-[90px]">
                    <div className="absolute w-[395px] h-2.5 top-2 left-0 bg-[#eeeeee] rounded-[20px]" />
                    <div className="w-[212px] absolute h-2.5 top-2 left-0 bg-[#005dff] rounded-[20px]" />
                    <div className="left-[198px] absolute w-[26px] h-[26px] top-0 bg-[#005dff] rounded-[5px]" />
                  </div>
                  <div className="absolute top-[3px] left-[90px] [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Prototyping
                  </div>
                  <div className="absolute w-[62px] h-[62px] top-0 left-0 rounded-[70px] border border-solid border-[#f3eff8]">
                    <div className="top-[18px] left-[13px] text-[#005dff] text-right absolute [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
                      65%
                    </div>
                  </div>
                </div>
                <div className="top-[154px] left-[561px] absolute w-[489px] h-[62px]">
                  <div className="absolute w-[395px] h-[26px] top-9 left-[90px]">
                    <div className="absolute w-[395px] h-2.5 top-2 left-0 bg-[#eeeeee] rounded-[20px]" />
                    <div className="w-[358px] absolute h-2.5 top-2 left-0 bg-[#005dff] rounded-[20px]" />
                    <div className="left-[346px] absolute w-[26px] h-[26px] top-0 bg-[#005dff] rounded-[5px]" />
                  </div>
                  <div className="absolute top-[3px] left-[90px] [font-family:'Poppins',Helvetica] font-medium text-[#505050] text-base tracking-[0] leading-[normal]">
                    Recherche
                  </div>
                  <div className="absolute w-[62px] h-[62px] top-0 left-0 rounded-[70px] border border-solid border-[#f3eff8]">
                    <div className="top-[18px] left-[13px] text-[#005dff] text-right absolute [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
                      94%
                    </div>
                  </div>
                </div>
                <div className="absolute top-px left-px [font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                  RÉSULTATS DE TEST
                </div>
                <div className="absolute w-[655px] h-1.5 top-[15px] left-[187px] bg-[#e6e6e6]" />
                <div className="absolute top-0 left-[878px] [font-family:'Poppins',Helvetica] font-semibold text-[#005dff] text-lg tracking-[0] leading-[normal]">
                  + Ajouter des tests
                </div>
              </div>
              <div className="absolute w-[1045px] h-[57px] top-[26px] left-[31px]">
                <div className="w-[194px] left-[851px] absolute h-[57px] top-0">
                  <div className="relative w-48 h-[57px] bg-[#005dff] rounded-[54px]">
                    <div type="submit" className="absolute top-[15px] left-[46px] [font-family:'Poppins',Helvetica] font-semibold text-[#fffcfc] text-lg tracking-[0] leading-[normal] cursor-pointer"
                    >
                      Enregistrer
                    </div>
                  </div>
                </div>
                
                <div className="w-[131px] left-[702px] absolute h-[57px] top-0">
                  <div className="relative w-[129px] h-[57px] bg-[#f4f4f4] rounded-[54px]">
                    <div className="absolute top-[15px] left-7 [font-family:'Poppins',Helvetica] font-semibold text-[#9f9f9f] text-lg tracking-[0] leading-[normal]">
                      Annuler
                    </div>
                  </div>
                </div>
                <div className="absolute w-[282px] h-[25px] top-4 left-[357px]">
                  <div className="absolute w-[45px] h-6 top-0 left-[235px]">
                    <div className="relative h-6">
                      <div className="absolute w-[33px] h-4 top-1 left-0 bg-[#e4cfff] rounded-[23px]" />
                      <div className="absolute w-6 h-6 top-0 left-[21px] bg-[#005dff] rounded-xl" />
                    </div>
                  </div>
                  <div className="absolute top-px left-0 [font-family:'Poppins',Helvetica] font-semibold text-[#5c5c5c] text-base tracking-[0] leading-[normal]">
                    Disponible à l&#39;embauche ?
                  </div>
                </div>
                <div className="absolute top-3.5 left-0 [font-family:'Poppins',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal]">
                  Modifier le profil
                </div>
              </div>
            </div>
            <div className="absolute w-[339px] h-[378px] top-[804px] left-[1143px]">
              <div className="w-[341px] h-[378px]">
                <div className="relative w-[339px] h-[378px] bg-white rounded-[20px]">
                  <div className="absolute top-[30px] left-[30px] [font-family:'Poppins',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                    Portfolios
                  </div>
                  <img className="absolute w-6 h-6 top-[30px] left-[285px]" alt="Ic option" src="/img/ic-option.svg" />
                  <div className="absolute w-[285px] h-[49px] top-[81px] left-7">
                    <div className="relative w-[283px] h-[49px] bg-[#fbfbfb] rounded-[18px]">
                      <div className="absolute w-[49px] h-[49px] top-0 left-0 bg-[#3d6ad6] rounded-[18px]">
                        <img className="absolute w-6 h-6 top-3 left-[13px]" alt="Facebook" src="/img/facebook-1.svg" />
                      </div>
                      <input className="absolute top-[13px] left-[69px] [font-family:'Poppins',Helvetica] font-medium text-[#3c3c3c] text-base tracking-[0] leading-[normal]" name="portfolio.facebook" value={formState.portfolio.facebook} onChange={handleChange} />
                      
                    </div>
                  </div>
                  <div className="absolute w-[285px] h-[49px] top-[223px] left-7">
                    <div className="relative w-[283px] h-[49px] bg-[#fbfbfb] rounded-[18px]">
                      <input className="absolute top-[13px] left-[72px] [font-family:'Poppins',Helvetica] font-medium text-[#3c3c3c] text-base tracking-[0] leading-[normal] border-none" name="portfolio.linkedin" value={formState.portfolio.linkedin} onChange={handleChange}/>
                       
                      <div className="absolute w-[49px] h-[49px] top-0 left-0 bg-[#0073b1] rounded-[18px]">
                        <img className="absolute w-6 h-6 top-3 left-[13px]" alt="Linkedin" src="/img/linkedin-1.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[285px] h-[49px] top-[295px] left-7">
                    <div className="relative w-[283px] h-[49px] bg-[#fbfbfb] rounded-[18px]">
                      <input className="absolute top-[13px] left-[72px] [font-family:'Poppins',Helvetica] font-medium text-[#3c3c3c] text-base tracking-[0] leading-[normal] border-none" name="portfolio.youtube" value={formState.portfolio.youtube} onChange={handleChange}/>
                       
                      <div className="absolute w-[49px] h-[49px] top-0 left-0 bg-[#ff0000] rounded-[18px]">
                        <img className="absolute w-6 h-6 top-3 left-[13px]" alt="Youtube" src="/img/youtube-1.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[285px] h-[49px] top-[153px] left-7">
                    <div className="relative w-[283px] h-[49px] bg-[#fbfbfb] rounded-[18px]">
                      <input className="absolute top-[13px] left-[72px] [font-family:'Poppins',Helvetica] font-medium text-[#3c3c3c] text-base tracking-[0] leading-[normal] border-none" name="portfolio.huggingface" value={formState.portfolio.huggingface} onChange={handleChange}/>
                      <div className="absolute w-[49px] h-[49px] top-0 left-0 bg-[#ea518d] rounded-[18px]">
                        <img className="absolute w-6 h-6 top-3 left-[13px]" alt="huggingface" src="/src/image/huggingface.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[339px] h-[774px] top-0 left-[1143px] bg-white rounded-[20px]">
              <div className="absolute w-[245px] h-[99px] top-[634px] left-[47px]">
                <div className="left-0 absolute w-[58px] h-[99px] top-0">
                  <div className="absolute w-[60px] h-[57px] top-0 left-0">
                    <div className="relative w-[78px] h-[77px] top-[-30px] left-[-30px] rounded-[39.05px/38.52px] border-[20px] border-solid border-[#f0f0f0] bg-[url(/static/img/ellipse-13.svg)] bg-[100%_100%]">
                      <div className="absolute w-[53px] h-[52px] top-[-7px] left-[-7px] bg-white rounded-[51px] shadow-[0px_4px_10px_#00000021]" />
                      <div className="top-[5px] left-[5px] text-[#232323] absolute [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
                        66%
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-7 h-[21px] top-[78px] left-[15px]">
                    <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#000000bd] text-sm text-center tracking-[0] leading-[normal]">
                      PHP
                    </div>
                  </div>
                </div>
                <div className="left-[95px] absolute w-[58px] h-[99px] top-0">
                  <div className="absolute w-[60px] h-[57px] top-0 left-0">
                    <div className="relative w-[78px] h-[77px] -top-2.5 -left-2.5 rounded-[39.05px/38.52px] border-[20px] border-solid border-[#f0f0f0]">
                      <img
                        className="absolute w-[49px] h-[61px] -top-5 left-[9px]"
                        alt="Ellipse"
                        src="/img/ellipse-12.svg"
                      />
                      <div className="absolute w-[53px] h-[52px] top-[-7px] left-[-7px] bg-white rounded-[51px] shadow-[0px_4px_10px_#00000021]" />
                      <div className="top-[5px] left-[5px] text-[#232323] absolute [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
                        31%
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[30px] h-[21px] top-[78px] left-[13px]">
                    <div className="top-0 left-0 font-normal text-[#000000bd] text-sm text-center absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                      Vue
                    </div>
                  </div>
                </div>
                <div className="left-[187px] absolute w-[58px] h-[99px] top-0">
                  <div className="absolute w-[60px] h-[57px] top-0 left-0">
                    <div className="relative w-[78px] h-[77px] -top-2.5 -left-2.5 rounded-[39.05px/38.52px] border-[20px] border-solid border-[#f0f0f0]">
                      <img
                        className="absolute w-[37px] h-[43px] -top-5 left-[9px]"
                        alt="Ellipse"
                        src="/img/ellipse-12-1.svg"
                      />
                      <div className="absolute w-[53px] h-[52px] top-[-7px] left-[-7px] bg-white rounded-[51px] shadow-[0px_4px_10px_#00000021]" />
                      <div className="top-[5px] left-2 text-[#232323] absolute [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
                        7%
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[53px] h-[21px] top-[78px] left-[3px]">
                    <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#000000bd] text-sm text-center tracking-[0] leading-[normal]">
                      Laravel
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[207px] h-[49px] top-[461px] left-[29px]">
                <div className="absolute w-[49px] h-[49px] top-0 left-0 rounded-[50px] border border-solid border-[#3f179d29]">
                  <img className="absolute w-6 h-6 top-[11px] left-3" alt="Telephone" src="/img/telephone-1-1.svg" />
                </div>
                <div className="absolute top-3 left-[69px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                {formState.contact.phoneNumber}
                </div>
              </div>
              <div className="absolute w-[257px] h-[49px] top-[531px] left-[29px]">
                <div className="absolute w-[49px] h-[49px] top-0 left-0 rounded-[50px] border border-solid border-[#3f179d29]">
                  <img className="absolute w-6 h-6 top-[11px] left-3" alt="Email" src="/img/email-1-1-1.svg" />
                </div>
                <div
                  className="absolute top-[13px] left-[69px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] [background:transparent] border-[none] p-0 border-none"
                >
                  {formState.email}
                </div>
              </div>
              <div className="absolute w-[279px] h-px top-[423px] left-[31px] bg-[#eaeaea] rounded-[20px]" />
              <div className="absolute w-[133px] h-[85px] top-[301px] left-[30px]">
                <div className="relative w-[129px] h-[85px] rounded-[19px] border border-solid border-[#f0f0f0]">
                  <div className="top-[11px] left-[43px] text-black text-[22px] absolute [font-family:'Poppins',Helvetica] font-semibold tracking-[0] leading-[normal]">
                    228
                  </div>
                  <div className="absolute top-[49px] left-1.5 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                    Abonnements
                  </div>
                </div>
              </div>
              <div className="absolute w-[133px] h-[85px] top-[302px] left-[181px]">
                <div className="relative w-[129px] h-[85px] rounded-[19px] border border-solid border-[#f0f0f0]">
                  <div className="absolute top-2.5 left-[33px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
                    4,842
                  </div>
                  <div className="absolute top-12 left-[26px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                    Abonnés
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[152px] h-[152px] top-9 left-[94px]"
                alt="Profile picture"
                src="/img/profilepicture.png"
              />
              <div className="absolute w-[126px] h-[62px] top-[209px] left-[108px]">
                <div className="top-0 text-[22px] text-center absolute left-0 [font-family:'Poppins',Helvetica] font-medium text-black tracking-[0] leading-[normal]">
                  {formState.firstName}
                </div>
                <div className="absolute top-[38px] left-1 [font-family:'Poppins',Helvetica] font-normal text-[#000000b2] text-base text-center tracking-[0] leading-[normal]">
                  {formState.role}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1575px] h-[166px] top-0 left-[345px]">
            <div className="absolute w-[1575px] h-[120px] top-0 left-0 bg-[#f2f2f2]">
              <Group
                className="!absolute !left-[510px] !top-[23px]"
                icChat="/img/ic-chat-1.svg"
                icSearch="/img/ic-search-1.svg"
              />
              <div className="absolute w-[148px] h-[42px] top-[39px] left-[50px]">
                <div className="top-0 left-[74px] text-black text-[28px] absolute [font-family:'Poppins',Helvetica] font-semibold tracking-[0] leading-[normal]">
                  Profil
                </div>
                <img className="absolute w-[29px] h-[18px] top-3 left-0" alt="Ic menu" src="/img/ic-menu.png" />
              </div>
              <div className="absolute w-[182px] h-[57px] top-[31px] left-[1340px]">
                <div className="absolute top-[5px] left-[88px] [font-family:'Poppins',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
                  {formState.username}
                </div>
                <div className="absolute top-[34px] left-[88px] [font-family:'Poppins',Helvetica] font-normal text-[#8f8f8f] text-xs tracking-[0] leading-[normal]">
                  Talents
                </div>
                <div className="absolute w-[57px] h-[57px] top-0 left-0 bg-[#c4c4c4] rounded-[65px]" />
              </div>
            </div>
            <div className="absolute w-[187px] h-6 top-[142px] left-[50px]">
              <div className="top-0 left-0 text-[#005dff] text-base absolute [font-family:'Poppins',Helvetica] font-semibold tracking-[0] leading-[normal]">
                Profil /
              </div>
              <div className="absolute top-0 left-14 [font-family:'Poppins',Helvetica] font-normal text-[#969ba0] text-base tracking-[0] leading-[normal]">
                Modifier le profil
              </div>
            </div>
          </div>
          <div className="absolute w-[345px] h-[1604px] top-0 left-0 bg-[#e0ebff] rounded-sm">
            <div className="relative w-[349px] h-[1537px] top-[67px]">
              <div className="absolute w-[345px] h-[747px] top-[790px] left-0 bg-[#d6e5fd] rounded-[0px_30px_2px_0px]" />
              <div className="absolute w-[349px] h-[900px] top-0 left-0">
                <Link to="/OffresDemploi" className="absolute w-[347px] h-20 top-[207px] left-0">
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
                <div className="absolute w-[347px] h-[187px] top-0 left-0">
                  <Link  className="absolute w-[347px] h-[163px] top-0 left-0 block" to="/profil">
                    <div className="relative w-[345px] h-[163px]">
                      <div className="absolute w-[345px] h-20 top-[35px] left-0 bg-[#e0ebff]" />
                      <img
                        className="absolute w-[302px] h-[163px] top-0 left-[43px]"
                        alt="Background"
                        src="/img/background.svg"
                      />
                      <div className="top-[61px] left-[149px] text-black text-lg absolute [font-family:'Poppins',Helvetica] font-semibold tracking-[0] leading-[normal]">
                        Profil utilisateur
                      </div>
                      <img
                        className="absolute w-[19px] h-[19px] top-[65px] left-[81px]"
                        alt="Vector"
                        src="/img/vector-1.svg"
                      />
                    </div>
                  </Link>
                  <Link to="/TableauDeBord" className="absolute w-60 h-[60px] top-[127px] left-[60px]">
                    <div className="absolute top-4 left-[89px] [font-family:'Poppins',Helvetica] font-normal text-[#707070] text-lg tracking-[0] leading-[normal]">
                      Tableau de bord
                    </div>
                    <div className="absolute w-[60px] h-[60px] top-0 left-0 rounded-[18px]">
                      <img className="absolute w-7 h-7 top-4 left-4" alt="Ic home" src="/img/ic-home.svg" />
                    </div>
                  </Link>
                </div>
                <Link to="/Formations" className="absolute w-[347px] h-20 top-[297px] left-0">
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
                </Link>
                <Link to="/Forum" className="absolute w-[347px] h-20 top-[379px] left-0">
                  <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                    <div className="top-[26px] left-[149px] font-medium text-[#707070] text-lg absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                      Forum
                    </div>
                    <img
                      className="absolute w-7 h-7 top-[26px] left-[76px]"
                      alt="Ic analytics"
                      src="/img/ic-analytics.svg"
                    />
                  </div>
                </Link>
                <Link to="/RendezVous" className="top-[469px] absolute w-[347px] h-20 left-0">
                  <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                    <div className="absolute top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                      Rendez-vous
                    </div>
                    <img
                      className="absolute w-[21px] h-[21px] top-[29px] left-[78px]"
                      alt="Vector"
                      src="/img/vector-2.svg"
                    />
                  </div>
                </Link>
                <Link className="top-[559px] absolute w-[347px] h-20 left-0">
                  <div className="relative w-[345px] h-20 bg-[#e0ebff]">
                    <p className="absolute w-[164px] top-[26px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                      Coding game &amp; Tests techniques
                    </p>
                    <img className="absolute w-7 h-7 top-[26px] left-[76px]" alt="Ic news" src="/img/ic-news.svg" />
                  </div>
                </Link>
                <Link to="/Parametres" className="absolute top-[823px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                  Paramètres
                </Link>
                <Link className="absolute top-[873px] left-[149px] [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg tracking-[0] leading-[normal]">
                  Déconnection
                </Link>
                <img
                  className="absolute w-[27px] h-[27px] top-[827px] left-[75px]"
                  alt="Vector"
                  src="/img/vector-3.svg"
                />
                <img
                  className="absolute w-[27px] h-[15px] top-[879px] left-[72px]"
                  alt="Vector"
                  src="/img/vector-4.svg"
                />
              </div>
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
      </form>
    </div>
  );
};
