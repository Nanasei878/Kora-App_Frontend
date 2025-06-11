import React, { useState, useEffect } from "react";
import "./style.css";
import { forgotPassword as forgotPasswordService } from "../../requests";

export const ForgotPassword = () => {
  const [email, setEmail] = useState('') 
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [emailError, setEmailError] = useState("")

  /*useEffect(() => {
    if (error.length > 0) {
      console.log(error);
    }
  }, [error]);*/


  const handleLogin = async (event) => {
    event.preventDefault()
    
     if ("" === email) {
      setEmailError("Please enter your email")
      return
     }
     if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email")
      return
     }
     

    try {
    const user = await forgotPasswordService({
      email: email,
    });

      if (!user.ok) {
        const data = await user.json();
        throw new Error(data.message);
      }
      
      window.location.replace("/connection");

      //noteService.setToken(user.token)
      setUser(user)
      setEmail('')
  }catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="CONNEXION">
      <div className="div">
        <img className="vector" alt="Vector" src="/img/vector.svg" />

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

          <div className="group-wrapper">
            <div className="group-2">
              <div className="group-3">
                <div className="div-wrapper">
                  <div className="text-wrapper">Talents</div>
                </div>

                <div className="text-wrapper-2">Entreprises</div>

                <img className="line" alt="Line" src="/img/line-1.svg" />
              </div>

              <form  onSubmit={handleLogin}>
                <div className="group-4">


                <div className="group-5">
                  <div className="overlap-wrapper">
                    <div className="overlap-group-2">
                      <input className="text-wrapper-6" type="text" style={{ border: 'none', outline: 'none' }}
                        placeholder="Adresse email ou numéro de téléphone" name="Email" onChange={({ target }) => setEmail(target.value)} />
                        <label style={{color: 'red', fontSize: '12px'}}>{emailError}</label>
                    </div>
                    <div className="se-connecter-wrapper" style={{ marginTop: '10px'}}>
                    <button type="submit" className="se-connecter">SE CONNECTER</button>
                    </div>
                  </div>

                  {/*<div className="group-6">
                    <div className="overlap-2">
                      <div className="rectangle" />

                      <div className="group-7">
                        <div className="frame">
                          <button type="submit" className="se-connecter">SE CONNECTER</button>
                        </div>

                        <img
                          className="img"
                          alt="Vector"
                          src="/img/vector-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                   */}

                 
                </div>
                </div>
              </form>

            </div>
          </div>

          <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />

          <div className="text-wrapper-9">Bienvenue à Fatala Hub</div>


          <div className="frame-2">
            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="group-15">
                  <div className="text-wrapper-11">Inscription</div>

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
      </div>
    </div>
  );
};
