import React from "react";
import "./style.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerService } from "../../requests";

export const Inscription = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigate = useNavigate();

  const signUp = () => {
      // Assuming username, email, and password are defined and hold values from user input.
      const userData = {
          username, 
          email,    
          password  
      };

      registerService(userData)
      .then(response => {
          // The server should send back a response with a 'message' key
          if ('success' === response.data.message) {
              window.alert("Registered successfully! Log in with your username and password.");
              navigate("/Connection");
          } else {
              window.alert("Registration failed: " + response.data.message);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          window.alert("An error occurred during registration.");
      });
  };

  const handleRegister = () => {
         // Set initial error values to empty
         setEmailError("")
         setUsernameError("")
         setPasswordError("")

         // Check if the user has entered both fields correctly
        if ("" === username) {
            setUsernameError("Please enter your username")
            return
        }

        if (username.length < 3) {
          setUsernameError("The username must be 3 characters or longer")
          return
      }



        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 7 characters or longer")
            return
        }

        // Authentication calls will be made here... 
       signUp()  

    }

  return (
    <div className="INSCRIPTION">
      <div className="div">
        <img className="vector" alt="Vector" src="/img/image.svg" />

        <div className="overlap">
          <img className="kjgrn" alt="Kjgrn" src="/img/kjgrn-1.png" />

          <img className="image" alt="Image" src="/img/image-24.png" />

          <div className="group">
            <div className="overlap-group">
              <img
                className="mask-group"
                alt="Mask group"
                src="/img/mask-group.png"
              />
            </div>
          </div>

          <div className="group-2">
            <div className="text-wrapper">Lorem ipsum dolor</div>

            <p className="p">
              Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum
              nibh quis vel vel in viverra ut ut. Egestas at non cras duis amet.
              Morbi suspendisse faucibus lectus pulvinar et mus volutpat eu
              luctus.
            </p>

            <div className="frame">
              <div className="frame-wrapper">
                <div className="group-wrapper">
                  <div className="group-3">
                    <div className="text-wrapper-2">Connexion</div>

                    <div className="chevron-down-wrapper">
                      <img
                        className="chevron-down"
                        alt="Chevron down"
                        src="/img/chevron-down.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-4">
            <img className="img" alt="Group" src="/img/group-1458.png" />

            <div className="group-5">
              <div className="group-6">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Talents</div>
                </div>

                <div className="text-wrapper-4">Entreprises</div>

                <img className="line" alt="Line" src="/img/line-1.svg" />
              </div>

              <div className="group-7">
                <p className="text-wrapper-5">
                  Inscrivez-vous pour commencer à utiliser Fatalahub
                </p>

                <div className="group-8">
                  <div className="group-9">
                    <div className="text-wrapper-6">
                      Inscrivez-vous avec Google
                    </div>

                    <img
                      className="group-10"
                      alt="Group"
                      src="/img/group-1447.png"
                    />
                  </div>
                </div>
              </div>

              <img className="line-2" alt="Line" src="/img/line-3.svg" />

              <div className="group-11">
                <p className="vous-d-ja-un-compte">
                  <span className="span">Vous déja un compte ?</span>

                  <span className="text-wrapper-7">&nbsp;</span>

                  <span className="text-wrapper-8">
                    Connectez-vous à Fatalahub
                  </span>
                </p>

                <div className="group-12">
                  <p className="text-wrapper-9">Mot de passe oublié ?</p>

                  <div className="group-13">
                    <div className="group-14">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-10">
                            Date de naissance
                          </div>
                        </div>
                      </div>

                      <div className="overlap-wrapper">
                        <div className="overlap-2">
                          <div className="text-wrapper-10">Pays</div>

                          <img
                            className="vector-2"
                            alt="Vector"
                            src="/img/vector-3.svg"
                          />
                        </div>
                      </div>

                      <div className="group-15">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-10">Mot de passe</div>
                        </div>
                      </div>

                      <div className="group-16">
                        <div className="overlap-group-2">
                          <p className="text-wrapper-10">
                            Confirmer le mot de passe
                          </p>
                        </div>
                      </div>

                      <div className="group-17">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-10">Email</div>
                        </div>
                      </div>

                      <div className="group-18">
                        <div className="overlap-3">
                          <div className="text-wrapper-11">Nom</div>
                        </div>

                        <div className="overlap-4">
                          <div className="text-wrapper-11">Prénoms</div>
                        </div>
                      </div>
                    </div>

                    <div className="group-19">
                      <div className="overlap-5">
                        <div className="text-wrapper-12">S’INSCRIRE</div>
                      </div>
                    </div>

                    <div className="group-20">
                      <div className="ellipse-wrapper">
                        <div className="ellipse" />
                      </div>

                      <div className="group-21">
                        <div className="group-22">
                          <div className="text-wrapper-13">Pronom</div>

                          <div className="text-wrapper-14">il</div>

                          <div className="text-wrapper-15">elle</div>

                          <div className="text-wrapper-16">iel</div>

                          <div className="rectangle" />

                          <div className="rectangle-2" />

                          <div className="rectangle-3" />
                        </div>

                        <img
                          className="vector-3"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-17">Image de profil</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-23">
            <div className="group-24">
              <div className="text-wrapper-18">Continuer avec Microsoft</div>

              <img className="group-25" alt="Group" src="/img/group-1442.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
