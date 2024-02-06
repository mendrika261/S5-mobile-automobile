"use client";

import {useState} from "react";
import {sendPostConnexion} from "@/app/utils/hooks";
import {API_BASE_URL, URL_EXTENSION} from "@/app/config";

export default function Connexion() {
    const [data, setData] = useState({
        email: "ravaka@gmail.com",
        motDePasse: "12345678"
    });

    async function submit(e: any) {
        e.target.disabled = true;
        await sendPostConnexion(API_BASE_URL+"tokens/utilisateur", data);
        e.target.disabled = false;
    }

    return (
        <div className="contact-section overview-bgi">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-content-box">
                            <a href="/">
                                <img src="/assets/img/logos/logo.png" className="cm-logo" alt="logo"/>
                            </a>
                            <div className="details">
                                <h3>S&apos;authentifier</h3>
                                <form id={"form"}>
                                    <div className="form-group">
                                        <input type="email" className="input-text" placeholder="Email"
                                               value={data.email}
                                               onChange={(e) => setData({...data, email: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="input-text" placeholder="Mot de passe"
                                               value={data.motDePasse}
                                               onChange={(e) => setData({...data, motDePasse: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <button type="button" className="btn-md btn-theme btn-block"
                                                onClick={submit}>
                                            Se connecter
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="footer">
                            <span>
                                Pas encore de compte? <a href={`/inscription${URL_EXTENSION}`}>S&apos;inscrire ici</a>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}