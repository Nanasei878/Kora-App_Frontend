import React, { useState, useEffect } from "react";
import "./style.css";
import { login as loginService } from "../../requests";

export const Connexion = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [passwordError, setPasswordError] = useState("")
  const [emailError, setEmailError] = useState("")

  /*useEffect(() => {
    if (error.length > 0) {
      console.log(error);
    }
  }, [error]);*/


  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', email, password)
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
      setPasswordError("The password must be 8 characters or longer")
      return
     }

    try {
    const user = await loginService.login({
      email: email,
      password: password,
    });

      if (!user.ok) {
        const data = await user.json();
        throw new Error(data.message);
      }
      const data = await user.json();
      localStorage.setItem('jstoken', data.jwt.token);

      const date = new Date();
      const formattedDate = `${date.getFullYear()}-${
        date.getMonth() + 1 < 10 ? '0' : ''
      }${date.getMonth() + 1}-${date.getDate()}`;

      let session = data.last_session;

      if (!session || session.split('_')[0] !== formattedDate) {
        session = `${formattedDate}_1`;
      } else {
        const nextSession = parseInt(session.split('_')[1]) + 1;
        session = `${formattedDate}_${nextSession}`;
      }

      localStorage.setItem('session', session);
      window.location.replace("/profil");

      //noteService.setToken(user.token)
      setUser(user)
      setEmail('')
      setPassword('')
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

              <p className="vous-n-avez-pas-de">
                <span className="span">
                Vous n&#39;avez pas de compte ?
                </span>

                <span className="text-wrapper-3">&nbsp;</span>

                <span className="text-wrapper-4">
                  <a href="/inscription" className="btn btn-outline-danger" > {/* Danger outline button */}
                  S&#39;inscrire à Fatalahub
                </a>
                </span>
              </p>

              <form  onSubmit={handleLogin}>
                <div className="group-4">
                <p className="p">Mot de passe oublié ?</p>

                <div className="group-5">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <input type="password" style={{ border: 'none', outline: 'none' }} placeholder="Mot de passe" className="text-wrapper-5" name="Password" onChange={({ target }) => setPassword(target.value)} />
                      <label style={{color: 'red', fontSize: '12px'}}>{passwordError}</label>
                    </div>
                  </div>

                  <div className="overlap-wrapper">
                    <div className="overlap-group-2">
                      <input className="text-wrapper-6" type="text" style={{ border: 'none', outline: 'none' }}
                        placeholder="Adresse email ou numéro de téléphone" name="Email" onChange={({ target }) => setEmail(target.value)} />
                        <label style={{color: 'red', fontSize: '12px'}}>{emailError}</label>
                    </div>
                  </div>

                  <div className="group-6">
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

                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                </div>
                </div>
              </form>

              <div className="group-8">
                <div className="j-ai-un-compte">
                  J&#39;ai un compte Fatalahub
                </div>

                <div className="group-9">
                  <div className="group-10">
                    <div className="text-wrapper-7">Continuer avec Google</div>

                    <img
                      className="group-11"
                      alt="Group"
                      src="/img/group-1447.png"
                    />
                  </div>
                </div>

                <div className="group-12">
                  <div className="group-13">
                    <div className="text-wrapper-8">
                      Continuer avec Microsoft
                    </div>

                    <img
                      className="group-14"
                      alt="Group"
                      src="/img/group-1442.png"
                    />
                  </div>
                </div>

                <img className="line-2" alt="Line" src="/img/line-3.svg" />
              </div>
            </div>
          </div>

          <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />

          <div className="text-wrapper-9">Bienvenue à Fatala Hub</div>

          <p className="text-wrapper-10">
            Lorem ipsum dolor sit amet consectetur. Suspendisse vestibulum nibh
            quis vel vel in viverra ut ut. Egestas at non cras duis amet. Morbi
            suspendisse faucibus lectus pulvinar et mus volutpat eu luctus.
          </p>

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
