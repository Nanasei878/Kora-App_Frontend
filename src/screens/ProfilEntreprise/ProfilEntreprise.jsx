import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnterpriseProfileAsync, createEnterpriseProfileAsync, updateEnterpriseProfileAsync } from '../../reducers/profilEnterpriseSlice';
 

export const ProfilEntreprise = () => {


  //console.log('Redux Profile Enterprice State:', profilEnterprise);

  const dispatch = useDispatch();
  //const profilEnterprise = useSelector((state) => state.profilEnterprise.profile); // adjust if your slice structure is different
  const { data: profilEnterprise } = useSelector((state) => state.profilEnterprise);


  const [formState, setFormState] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    aboutMe: '',
    avatar: '',
    role: '',
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
    profile: {
      experiences: [],
      skills: [],
      certifications: [],
    },
  });

  useEffect(() => {
    dispatch(fetchEnterpriseProfileAsync());
  }, [dispatch]);

  useEffect(() => {
    if (profilEnterprise) {
      setFormState((prev) => ({
        ...prev,
        ...profilEnterprise,
      }));
    }
  }, [profilEnterprise]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length === 2) {
      const [section, field] = keys;
      setFormState((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profilEnterprise?.username) {
      dispatch(updateEnterpriseProfileAsync({ ...formState, username: profilEnterprise.username }));
    } else {
      dispatch(createEnterpriseProfileAsync(formState));
    }
  };

  if (!profilEnterprise) {
    return <div>Loading...</div>;
  }


  return (
    <div className="profil-entreprise">
      <form onSubmit={handleSubmit}>
      <img className="vector" alt="Vector" src="/img/vector.svg" />

      <div className="div">
        <div className="div">
          <div className="overlap">
            <div className="page-background" />

            <div className="content-background" />

            <div className="CONTENT">
              <div className="edit-form">
                <div className="general">
                  <div className="input">
                    <div className="background" />

                    <div className="text-wrapper">Prénom</div>

                      <input className="text-wrapper-2" type="text" name="firstName" value={formState.firstName} style={{ border: 'none', outline: 'none' }} onChange={handleChange} />

                  </div>

                  <div className="text-wrapper-3">GÉNÉRAL</div>

                  <div className="input-2">
                    <div className="background" />

                    <div className="text-wrapper">Deuxième prénom</div>

                      <input className="text-wrapper-2" type="text" name="middleName" value={formState.middleName} onChange={handleChange} style={{ border: 'none', outline: 'none' }} placeholder="Entrer le deuxième prénom" />
                  </div>

                  <div className="input-3">
                    <div className="background" />

                    <div className="text-wrapper">Nom de famille</div>

                      <input className="text-wrapper-2" type="text" name="lastName" value={formState.lastName} onChange={handleChange} style={{ border: 'none', outline: 'none' }} />

                    
                  </div>

                  <div className="input-4">
                    <div className="background" />

                    <div className="text-wrapper">Nom d&#39;utilisateur</div>

                      <input className="text-wrapper-2" type="text" name="username" value={formState.username} onChange={handleChange} style={{ border: 'none', outline: 'none' }} placeholder="israelree"/>
                  </div>

                  <div className="input-5">
                    <div className="background" />

                    <div className="text-wrapper-5">Montrer</div>

                    <div className="text-wrapper">Mot de passe</div>

                      <input className="text-wrapper-2" type="password" name="password" value={formState.password} onChange={handleChange} style={{border: 'none', outline: 'none' }} />
                  </div>

                  <div className="input-6">
                    <div className="background" />

                    <p className="text-wrapper">Retaper le mot de passe</p>

                      <input className="text-wrapper-2" type="password" name="password" value={formState.password} onChange={handleChange} style={{border: 'none', outline: 'none' }} />

                    <div className="text-wrapper-6">Montrer</div>
                  </div>

                  <div className="divider" />
                </div>

                <div className="contact">
                  <div className="input">
                    <div className="background" />

                    <img
                      className="telephone"
                      alt="Telephone"
                      src="/img/telephone-1.svg"
                    />

                    <div className="text-wrapper">Téléphone portable</div>

                      <input className="text-wrapper-7" name="contact.phoneNumber" value={formState.contact.phoneNumber} onChange={handleChange} style={{ border: 'none', outline: 'none' }}/>
                  </div>

                  <div className="input-4">
                    <div className="background" />

                    <div className="text-wrapper">Addresse</div>

                      <input className="text-wrapper-2" type="text" name="address.address" value={formState.address.address} onChange={handleChange} style={{ border: 'none', outline: 'none' }} />
                  </div>

                  <div className="input-7">
                    <div className="background-3" />

                    <img
                      className="ic-chevron"
                      alt="Ic chevron"
                      src="/img/ic-chevron-1.svg"
                    />

                    <div className="text-wrapper">Ville</div>

                      <input className="text-wrapper-2" type="text" name="address.city" value={formState.address.city} onChange={handleChange} style={{ border: 'none', outline: 'none' }}/>
                  </div>

                  <div className="input-8">
                    <div className="background-3" />

                    <img
                      className="img"
                      alt="Ic chevron"
                      src="/img/ic-chevron-1.svg"
                    />

                    <div className="text-wrapper">Pays</div>

                      <input className="text-wrapper-2" type="text" name="address.country" value={formState.address.country} onChange={handleChange} style={{ border: 'none', outline: 'none' }} placeholder="Ivory Coast"/>
                  </div>

                  <div className="text-wrapper-3">CONTACT</div>

                  <div className="input-2">
                    <div className="background" />

                    <div className="text-wrapper">Whatsapp</div>

                      <input className="text-wrapper-8" type="text" name="contact.whatsapp" value={formState.contact.whatsapp} onChange={handleChange} style={{ border: 'none', outline: 'none' }} placeholder="+50 444 5511 11"/>

                    <img
                      className="whatsapp"
                      alt="Whatsapp"
                      src="/img/whatsapp-1.svg"
                    />
                  </div>

                  <div className="input-9">
                    <div className="background" />

                    <div className="text-wrapper">Email</div>

                      <input className="text-wrapper-9" type="email" name="email" value={formState.email} onChange={handleChange} style={{ border: 'none', outline: 'none' }}/>

                    <img
                      className="email"
                      alt="Email"
                      src="/img/email-1-1-1.svg"
                    />
                  </div>

                  <div className="divider-2" />
                </div>

              <div className="about">
  <div className="input-10">
    <div className="overlap-group">
      <textarea
        className="lorem-ipsum-dolor"
                          name="aboutMe"
                          value={formState.aboutMe} onChange={handleChange}
        style={{
          border: 'none',
          outline: 'none',
          width: '100%',
          height: '100%',
          resize: 'none',
          backgroundColor: '#fbfbfb',
          borderRadius: '20px',
          padding: '10px',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          overflowY: 'auto', // Enables vertical scrolling when needed
        }}
      />
    </div>

    <div className="text-wrapper">Tell me about yourself</div>
  </div>

  <div className="text-wrapper-3">ABOUT ME</div>

  <div className="divider-3" />
</div>





                <div className="skills">
                  <div className="item">
                    <div className="overlap-group-2">
                      <div className="background-4" />

                      <div className="active" />

                      <div className="handler" />
                    </div>

                    <div className="text-wrapper-10">Web developper</div>

                    <div className="div-wrapper">
                      <div className="text-wrapper-11">78%</div>
                    </div>
                  </div>

                  <div className="item-2">
                    <div className="overlap-group-2">
                      <div className="background-4" />

                      <div className="active-2" />

                      <div className="handler-2" />
                    </div>

                    <div className="text-wrapper-10">UI Design</div>

                    <div className="div-wrapper">
                      <div className="text-wrapper-12">89%</div>
                    </div>
                  </div>

                  <div className="item-3">
                    <div className="overlap-group-2">
                      <div className="background-4" />

                      <div className="active-3" />

                      <div className="handler-3" />
                    </div>

                    <div className="text-wrapper-10">Prototyping</div>

                    <div className="div-wrapper">
                      <div className="text-wrapper-12">65%</div>
                    </div>
                  </div>

                  <div className="item-4">
                    <div className="overlap-group-2">
                      <div className="background-4" />

                      <div className="active-4" />

                      <div className="handler-4" />
                    </div>

                    <div className="text-wrapper-10">Recherche</div>

                    <div className="div-wrapper">
                      <div className="text-wrapper-12">94%</div>
                    </div>
                  </div>

                  <div className="r-sultats-de-test">RÉSULTATS DE TEST</div>

                  <div className="divider-4" />

                  <div className="text-wrapper-13">+ Ajouter des tests</div>
                </div>

                <div className="title-bar">
                  <div className="btn-save">
                    <div className="overlap-group-3">
                        <div className="text-wrapper-14" type="submit">Enregistrer</div>
                    </div>
                  </div>

                  <div className="btn-cancel">
                    <div className="overlap-2">
                      <div className="text-wrapper-15">Annuler</div>
                    </div>
                  </div>

                  <div className="option">
                    <div className="ic-switch">
                      <div className="overlap-group-4">
                        <div className="element" />

                        <div className="element-2" />
                      </div>
                    </div>

                    <div className="disponible-l">
                      Disponible à l&#39;embauche ?
                    </div>
                  </div>

                  <div className="text-wrapper-16">Modifier le profil</div>
                </div>
              </div>

              <div className="profile-summary">
                <div className="phone">
                  <div className="img-wrapper">
                    <img
                      className="img-2"
                      alt="Telephone"
                      src="/img/telephone-1-1.svg"
                    />
                  </div>

                  <div className="text-wrapper-17">+225 0747588167</div>
                </div>

                <div className="email-2">
                  <div className="img-wrapper">
                    <img
                      className="img-2"
                      alt="Email"
                      src="/img/email-1-1-1.svg"
                    />
                  </div>

                  <input
                    className="mail-com"
                    placeholder="keydeath03@mail.com"
                    type="email"
                  />
                </div>

                <div className="divider-5" />

                <div className="following">
                  <div className="overlap-3">
                    <div className="text-wrapper-18">228</div>

                    <div className="text-wrapper-19">Abonnements</div>
                  </div>
                </div>

                <div className="followers">
                  <div className="overlap-3">
                    <div className="text-wrapper-20">4,842</div>

                    <div className="text-wrapper-21">Abonnés</div>
                  </div>
                </div>

                <img
                  className="profile-picture"
                  alt="Profile picture"
                  src="/img/profilepicture.png"
                />

                <div className="text">
                  <div className="text-wrapper-22">Israël SILUE</div>

                  <div className="text-wrapper-23">Ux/Ui designer</div>
                </div>
              </div>
            </div>

            <div className="SIDEBAR">
              <div className="overlap-4">
                <div className="background-5" />

                <div className="background-6" />

                <div className="mainmenu">
                  <div className="search-job">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-24">Création de mission</div>

                      <img
                        className="img-3"
                        alt="Ic search"
                        src="/img/ic-search.svg"
                      />
                    </div>
                  </div>

                  <div className="overlap-5">
                    <Link className="overlap-wrapper" to="/profil-entreprise">
                      <div className="overlap-6">
                        <div className="background-7" />

                        <img
                          className="background-8"
                          alt="Background"
                          src="/img/background.svg"
                        />

                        <div className="text-wrapper-25">Profil entreprise</div>

                        <img
                          className="ic-search"
                          alt="Ic search"
                          src="/img/ic-search-1.svg"
                        />
                      </div>
                    </Link>

                    <div className="dashboard">
                      <div className="text-wrapper-26">Tableau de bord</div>

                      <div className="ic-home-wrapper">
                        <img
                          className="ic-home"
                          alt="Ic home"
                          src="/img/ic-home.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="application">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-27">
                        Liste des missions proposées
                      </div>

                      <img
                        className="img-3"
                        alt="Ic applications"
                        src="/img/ic-applications.svg"
                      />
                    </div>
                  </div>

                  <div className="news">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-24">Rendez-vous</div>

                      <img
                        className="img-3"
                        alt="Ic news"
                        src="/img/ic-news.svg"
                      />
                    </div>
                  </div>

                  <div className="message">
                    <div className="overlap-7">
                      <img
                        className="img-3"
                        alt="Ic chat"
                        src="/img/ic-chat.svg"
                      />

                      <div className="text-wrapper-28">
                        Candidats disponibles
                      </div>
                    </div>
                  </div>

                  <div className="text-wrapper-29">Paramètres</div>

                  <div className="text-wrapper-30">Déconnection</div>

                  <img className="vector-2" alt="Vector" src="/img/image.svg" />

                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="NAV">
          <Link className="profile" to="/profil-entreprise">
            <div className="text-wrapper-31">Israël SILUE</div>

            <div className="text-wrapper-32">Entreprise</div>

            <div className="profile-picture-2" />
          </Link>

          <div className="notification">
            <div className="overlap-8">
              <div className="background-9" />

              <img className="img-4" alt="Ic bell" src="/img/ic-bell.svg" />

              <div className="dot-counter">
                <div className="overlap-group-6">
                  <div className="text-wrapper-33">52</div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-title">
            <div className="text-wrapper-34">Profil entreprise</div>

            <img className="ic-menu" alt="Ic menu" src="/img/ic-menu.png" />
          </div>

          <div className="searchbox">
            <div className="overlap-9">
              <img
                className="ic-search-2"
                alt="Ic search"
                src="/img/ic-search-2.svg"
              />

              <div className="text-wrapper-35">
                Cherchez quelque chose ici...
              </div>
            </div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-8">
              <div className="background-9" />

              <img className="img-4" alt="Ic chat" src="/img/ic-chat-1.svg" />

              <div className="dot-counter">
                <div className="overlap-group-6">
                  <div className="text-wrapper-36">18</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};
