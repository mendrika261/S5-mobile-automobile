"use client";

import {MENU, MENU_CONNECTE} from "@/app/(app)/info";
import {useEffect, useState} from "react";
import {API_BASE_URL, URL_EXTENSION} from "@/app/config";
import {deconnexion} from "@/app/utils/deconnexion";

export default function Header() {
    const [connecte, setConnecte] = useState(false);

    useEffect(() => {
        const token = localStorage?.getItem("token");
        if (token) {
            setConnecte(true);
        }
    }, []);

    async function deconnexionAction() {
        await deconnexion(API_BASE_URL+"tokens/utilisateur");
        window?.location?.replace("/");
    }

    return (
        <header className="main-header sticky-header" id="main-header-2" style={{zIndex: 10000}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light rounded">
                            <a className="navbar-brand logo navbar-brand d-flex mr-auto" href={`/mes-annonces${URL_EXTENSION}`}>
                                <img src="/assets/img/logos/black-logo.png" alt="logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="navbar-collapse collapse w-100" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                    {MENU.map((item: any, index) => (
                                        <li key={index} className="nav-item">
                                            <a className="nav-link" href={`${item.url}${URL_EXTENSION}`}>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                    {connecte ? (
                                        <>
                                            {MENU_CONNECTE.map((item, index) => (
                                                <li key={index} className="nav-item">
                                                    <a className="nav-link" href={`${item.url}${URL_EXTENSION}`}>
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className="nav-item dropdown">
                                                <button className="btn btn-sm btn-white-sm-outline
                                                    btn-round signup-link"
                                                onClick={deconnexionAction}>
                                                    Déconnexion</button>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="nav-item dropdown">
                                            <a className="btn btn-sm btn-white-sm-outline btn-round signup-link"
                                               href={`/connexion${URL_EXTENSION}`}>Connexion</a>
                                            <a className="btn btn-sm btn-theme btn-round signup-link"
                                               href={`/inscription${URL_EXTENSION}`}>Inscription</a>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}