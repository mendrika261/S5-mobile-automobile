"use client";

import ClientOnly from "@/app/(app)/ui/ClientOnly";

export default function SubBanner(
    {titre, buttons}:
    {titre: string, buttons?: any[]}
) {
    return (
        <ClientOnly>
        <div className="sub-banner overview-bgi">
            <div className="container">
                <div className="page-name">
                    <h1>{titre}</h1>
                </div>
            </div>
            <div className="page-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="breadcrumb-area">
                                <ul>
                                    <li><a href="/">Annonces</a></li>
                                    <li><span>/</span>{titre}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-info">
                                <ul>
                                    {/*<li><a href="/connexion" className="btn btn-md btn-theme">Se connecter</a></li>*/}
                                    {buttons && buttons.map((button, index) => (
                                        <li key={index}>
                                            <li>
                                                <a href={button.url} className="btn btn-md btn-theme">{button.nom}</a>
                                            </li>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ClientOnly>
    )
}