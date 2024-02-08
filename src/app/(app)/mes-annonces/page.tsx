"use client";

import SubBanner from "@/app/(app)/ui/SubBanner";
import {useGet} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";
import Loading from "@/app/loading";
import VoitureBox from "@/app/(app)/mes-annonces/ui/VoitureBox";
import {useEffect, useState} from "react";

export default function ListeMesAnnonces() {
    const [annonces, setAnnonces] = useGet(`${API_URL}utilisateurs/undefined/annonces`);
;

    return (
        <>
            <SubBanner titre="Mes annonces" />

            {annonces ?
            <div className="car-list-fullwidth content-area-2">
                <div className="container">
                    <div className="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                        <div className="row clearfix">
                            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5">
                                <h4 className="heading">{annonces.length} Annonces</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row mb-5">
                                <div className="col-12">
                                    <a href={`/annonces/ajouter${URL_EXTENSION}`} className="btn btn-md btn-theme col-12">
                                        Ajouter une annonce
                                        <span className="fa fa-plus mx-2"></span>
                                    </a>
                                </div>
                            </div>

                            {annonces.map((voiture: any, index: string) =>
                                <VoitureBox data={voiture} key={index}/>
                            )}
                        </div>
                    </div>
                </div>
            </div> : <Loading/>}
        </>
    )
}