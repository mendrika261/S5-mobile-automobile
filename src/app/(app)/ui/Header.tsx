"use client";

import {MENU, MENU_CONNECTE} from "@/app/(app)/info";
import Link from "next/link";
import {useEffect, useState} from "react";
import {API_BASE_URL} from "@/app/config";
import {deconnexion} from "@/app/utils/deconnexion";
import Image from "next/image";

export default function Header() {
    const [connecte, setConnecte] = useState(false);

    useEffect(() => {
        const token = localStorage?.getItem("token");
        if (token) {
            setConnecte(true);
        }
    }, []);

    function deconnexionAction() {
        deconnexion(API_BASE_URL+"tokens/utilisateur");
        window?.location?.replace("/");
    }

    return (
        <header className="main-header sticky-header" id="main-header-2" style={{zIndex: 10000}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light rounded">
                            <Link className="navbar-brand logo navbar-brand d-flex mr-auto" href="/">
                                <Image src="/assets/img/logos/black-logo.png" alt="logo" width={100} height={30}/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="navbar-collapse collapse w-100" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                    {MENU.map((item, index) => (
                                        <li key={index} className="nav-item">
                                            <Link className="nav-link" href={item.url}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                    {connecte ? (
                                        <>
                                            {MENU_CONNECTE.map((item, index) => (
                                                <li key={index} className="nav-item">
                                                    <Link className="nav-link" href={item.url}>
                                                        {item.label}
                                                    </Link>
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
                                               href="/connexion">Connexion</a>
                                            <a className="btn btn-sm btn-theme btn-round signup-link"
                                               href="/inscription">Inscription</a>
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