"use client";

import {useState} from "react";
import {sendPost} from "@/app/utils/hooks";
import {API_BASE_URL, URL_EXTENSION} from "@/app/config";

export default function Inscription() {
    const [data, setData] = useState({
        nom: "",
        prenom: "",
        email: "",
        contact: "",
        motDePasse: ""
    });

    async function submit(e: any) {
        e.target.disabled = true;
        await sendPost(API_BASE_URL+"auth/utilisateurs", data);
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
                                <h3>Création de compte</h3>
                                <form id={"form"}>
                                    <div className="form-group">
                                        <input type="text" className="input-text" placeholder="Prénom"
                                               onChange={(e) => setData({...data, prenom: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="input-text" placeholder="Nom"
                                               onChange={(e) => setData({...data, nom: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="input-text" placeholder="Email"
                                               onChange={(e) => setData({...data, email: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="input-text" placeholder="Contact"
                                               onChange={(e) => setData({...data, contact: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="input-text" placeholder="Mot de passe"
                                               onChange={(e) => setData({...data, motDePasse: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <button type="button" className="btn-md btn-theme btn-block"
                                                onClick={submit}>
                                            S&apos;inscrire
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="footer">
                            <span>
                                Déjà membre? <a href={`/connexion${URL_EXTENSION}`}>Se connecter ici</a>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}