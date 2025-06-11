import React, { useState } from "react";
import "./style.css";
import { resetPassword as resetPasswordService } from "../../requests";
//import { useHistory } from "react-router-dom";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [apiError, setApiError] = useState(null);
  const token = window.location.pathname.split("/")[2];
  //const history = useHistory();

  const handlePasswordReset = async (event) => {
    event.preventDefault();

    // Validate inputs
    if (!newPassword) {
      setValidationError("Veuillez entrer un nouveau mot de passe");
      return;
    }
    if (!confirmPassword) {
      setValidationError("Veuillez confirmer votre mot de passe");
      return;
    }
    if (newPassword !== confirmPassword) {
      setValidationError("Les mots de passe ne correspondent pas");
      return;
    }
    if (newPassword.length < 8) {
      setValidationError("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(newPassword)) {
      setValidationError(
        "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial"
      );
      return;
    }

    // API call
    try {
      await resetPasswordService({ token, newPassword });
      setValidationError(""); // Clear validation errors
      setApiError(null); // Clear API errors
      setValidationError("Mot de passe réinitialisé avec succès. Vous pouvez vous connecter.");
      setTimeout(() => window.location.replace("/connection"), 3000);
    } catch (err) {
      setApiError("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="CONNEXION">
      <div className="div">
        <img className="vector" alt="Vector" src="/img/vector.svg" />

        <div className="overlap">
          <img className="kjgrn" alt="Kjgrn" src="/img/kjgrn-1.png" />
          <img className="image" alt="Image" src="/img/image-24.png" />

          <div className="group">
            <div className="overlap-group">
              <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
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

              <form onSubmit={handlePasswordReset}>
                <div className="group-4">
                  <p className="p">Mot de passe oublié ?</p>

                  <div className="group-5">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <input
                          type="password"
                          style={{ border: "none", outline: "none" }}
                          placeholder="Nouveau mot de passe"
                          className="text-wrapper-5"
                          value={newPassword}
                          onChange={({ target }) => setNewPassword(target.value)}
                        />
                      </div>
                    </div>

                    <div className="overlap-wrapper">
                      <div className="overlap-group-2">
                        <input
                          type="password"
                          style={{ border: "none", outline: "none" }}
                          placeholder="Confirmer le mot de passe"
                          className="text-wrapper-5"
                          value={confirmPassword}
                          onChange={({ target }) => setConfirmPassword(target.value)}
                        />
                      </div>
                    </div>

                    <div className="group-6">
                      <div className="overlap-2">
                        <div className="rectangle" />

                        <div className="group-7">
                          <div className="frame">
                            <button type="submit" className="se-connecter">
                              SE CONNECTER
                            </button>
                          </div>
                          {validationError && (
                            <label style={{ color: "red", fontSize: "12px" }}>
                              {validationError}
                            </label>
                          )}
                          {apiError && (
                            <label style={{ color: "red", fontSize: "12px" }}>
                              {apiError}
                            </label>
                          )}

                          <img className="img" alt="Vector" src="/img/vector-3.svg" />
                        </div>
                      </div>
                    </div>
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
