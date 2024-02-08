"use client";

import SubBanner from "@/app/(app)/ui/SubBanner";
import {useGet} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Loading from "@/app/loading";

function getSortiesVoitureFiltre(sortieVoiture: any, filtres: any): any[] {
    return sortieVoiture.filter((v: any) => {
        return ((filtres.modele === undefined || v.modele.id == filtres.modele) &&
            (filtres.energie === undefined || v.energie.id == filtres.energie) &&
            (filtres.boiteVitesse === undefined || v.boiteVitesse.id == filtres.boiteVitesse)
            && (filtres.pays === undefined || v.pays.id == filtres.pays) &&
            (filtres.annee === undefined || v.annee == filtres.annee));
    });
}

export default function AjouterVoiture() {
    const [sortieVoitures, setSortieVoitures] = useGet(API_URL + "sortie_voitures");
    const [sortieVoituresFiltre, setSortieVoituresFiltre] = useState(sortieVoitures);
    const [filtres, setFiltres] = useState({});

    useEffect(() => {
        localStorage?.removeItem("voiture");
    }, []);

    useEffect(() => {
        if(sortieVoitures === null) return;
        setSortieVoituresFiltre(getSortiesVoitureFiltre(sortieVoitures, filtres));
    }, [filtres]);

    function suivant() {
        if(sortieVoituresFiltre === null) {
            toast.error("Vous devez sélectionner le modèle de la voiture");
            return;
        } else if(sortieVoituresFiltre.length === 0) {
            toast.error("Aucune voiture ne correspond");
            return;
        }
        localStorage?.setItem("voiture", JSON.stringify(sortieVoituresFiltre[0]));
        location.replace("/voitures/ajouter/detail" + URL_EXTENSION);
    }

    return (
        <>
            <SubBanner titre="Ajouter une voiture" />

            {sortieVoitures ?
            <div className="car-list-fullwidth content-area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-header">
                                    <a href={`/voitures${URL_EXTENSION}`} className="btn btn-sm btn-secondary mx-2">
                                        Retour
                                        <span className="fa fa-arrow-left mx-2"></span>
                                    </a>
                                    <button className="btn btn-sm btn-warning mx-2" onClick={() => {location?.reload()}}>
                                        Reset
                                        <span className="fa fa-refresh mx-2"></span>
                                    </button>
                                </div>
                                <div className="card-body">

                                    <div className="row mb-3">
                                        <div className="form-group col-12">
                                            <label className="form-label">Modèle</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({modele: e.target.value})}>
                                                <option>Sélectionner un modèle</option>
                                                {sortieVoitures.map((m: any, i: string) => (
                                                    <option key={i} value={m.modele.id}>
                                                        {m.modele.marque.nom} - {m.modele.nom}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Energie</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({...filtres, energie: e.target.value})}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.energie.id}>
                                                        {v.energie.nom}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Boite de vitesse</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({
                                                        ...filtres,
                                                        boiteVitesse: e.target.value
                                                    })}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.boiteVitesse.id}>
                                                        {v.boiteVitesse.nom}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Pays</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({...filtres, pays: e.target.value})}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.pays.id}>
                                                        {v.pays.nom}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Année</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({
                                                        ...filtres, annee: e.target.value
                                                    })}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.annee}>
                                                        {v.annee}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Place</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({
                                                        ...filtres,
                                                        nbrPlace: e.target.value
                                                    })}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.nbrPlace}>
                                                        {v.nbrPlace}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Porte</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({
                                                        ...filtres, nbrPorte: e.target.value
                                                    })}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.nbrPorte}>
                                                        {v.nbrPorte}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-4">
                                            <label className="form-label">Max (km/h)</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({
                                                        ...filtres,
                                                        vitesseMax: e.target.value
                                                    })}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.vitesseMax}>
                                                        {v.vitesseMax}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group col-4">
                                            <label className="form-label">Conso (L/100km)</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({
                                                        ...filtres, consommation: e.target.value
                                                    })}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.consommation}>
                                                        {v.consommation}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group col-4">
                                            <label className="form-label">Puissance (Cv)</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setFiltres({
                                                        ...filtres, puissance: e.target.value
                                                    })}>
                                                {sortieVoituresFiltre && sortieVoituresFiltre.map((v: any, i: string) => (
                                                    <option key={i} value={v.puissance}>
                                                        {v.puissance}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-sm btn-success" onClick={suivant}>
                                        Suivant
                                        <span className="fa fa-arrow-right mx-2"></span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            : <Loading/>}
        </>
    )
}