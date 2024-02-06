"use client";

import SubBanner from "@/app/(app)/ui/SubBanner";
import ClientOnly from "@/app/(app)/ui/ClientOnly";
import {useEffect, useState} from "react";
import {sendPost, useGet} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";
import Loading from "@/app/loading";

export default function AjouterVoiture() {
    const [data, setData] = useState({
        sortieVoiture: "",
        utilisateur: "",
        kilometrageVidange: "",
        kilometrage: "",
        etatVoiture: "",
        premiereMain: "false",
        couleur: "",
        miseEnCirculation: "",
        immatriculation: "",
        dateFinAssurance: "",
        dateControleTech: "",
        description: "",
    });
    const [etatVoitures, setEtatVoitures] = useGet(API_URL+"etat-voitures");
    const [couleurs, setCouleurs] = useGet(API_URL+"couleurs");
    const [couleur, setCouleur] = useState("");

    useEffect(() => {
        if(etatVoitures === null) return;
        setData({...data, etatVoiture: etatVoitures[0]?.id});

        if(couleurs === null) return;
        setData({...data, couleur: couleurs[0]?.id});
        setCouleur(couleurs[0]?.codeCouleur);
        console.log(data);
    }, [etatVoitures, couleurs]);

    async function enregistrer(btn: any) {
        btn.target.classList.add("btn-loading");

        const utilisateur = localStorage?.getItem("utilisateur");
        if(utilisateur === null) location?.replace("/connexion");
        // @ts-ignore
        data.utilisateur = JSON.parse(utilisateur).id;

        const voiture = localStorage?.getItem("voiture");
        if(voiture === null) location?.replace("/voitures/ajouter");
        // @ts-ignore
        data.sortieVoiture = JSON.parse(voiture).id;

        const response = await sendPost(API_URL+"voitures", data);
        btn.target.classList.remove("btn-loading");

        if (response != null) {
            localStorage?.setItem("voiture", JSON.stringify(response));
            location?.replace("/voitures/ajouter/detail/photo" + URL_EXTENSION + "?id=" + response.id);
        }
    }

    return (
        <ClientOnly>
            <SubBanner titre="Ajouter une voiture" />

            {(etatVoitures && couleurs) ?
            <div className="car-list-fullwidth content-area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-header">
                                    <a href={`/voitures/ajouter${URL_EXTENSION}`} className="btn btn-sm btn-secondary mx-2">
                                        Retour
                                    </a>
                                    <a href={`/voitures${URL_EXTENSION}`} className="btn btn-sm btn-primary mx-2">
                                        Mes voitures
                                    </a>
                                </div>
                                <div className="card-body">

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Kilométrage (km)</label>
                                            <input type="number" className="form-control" min={0} placeholder="50000"
                                                   onChange={e =>
                                                       setData({...data, kilometrage: e.target.value})}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Kilométrage vidange (km)</label>
                                            <input type="number" className="form-control" min={0} placeholder="2000"
                                                   onChange={e => setData({
                                                       ...data,
                                                       kilometrageVidange: e.target.value
                                                   })}/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Etat actuel</label>
                                            <select className="form-control form-select"
                                                    onChange={e =>
                                                        setData({...data, etatVoiture: e.target.value})}>
                                                {etatVoitures.map((etat: any, index: string) => (
                                                    <option key={index} value={etat.id}>{etat.designation}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Première main</label>
                                            <select className="form-control form-select"
                                                    onChange={e =>
                                                        setData({...data, premiereMain: e.target.value})}>
                                                <option value="false">Non</option>
                                                <option value="true">Oui</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-12">
                                            <label className="form-label">
                                                Couleur
                                                <div className="mx-2" style={{
                                                    display: "inline-block",
                                                    width: "50px",
                                                    height: "20px",
                                                    backgroundColor: couleur
                                                }}>
                                                </div>
                                            </label>
                                            <select className="form-control form-select"
                                                    onChange={e => {
                                                        const couleur = e.target.value.split("#");
                                                        setData({...data, couleur: couleur[0]});
                                                        setCouleur("#" + couleur[1]);
                                                    }}>
                                                {couleurs.map((couleur: any, index: string) => (
                                                    <option key={index}
                                                            value={`${couleur.id}${couleur.codeCouleur}`}>{couleur.nom}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Mise en circulation</label>
                                            <input type="number" className="form-control" min={1900} placeholder={"AAAA"}
                                                   maxLength={4}
                                                   onChange={e => setData({
                                                       ...data,
                                                       miseEnCirculation: e.target.value
                                                   })}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Immatriculation</label>
                                            <input type="text" className="form-control" placeholder={"0000AAA"}
                                                   onChange={e =>
                                                       setData({...data, immatriculation: e.target.value})}/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Fin assurance</label>
                                            <input type="date" className="form-control"
                                                   onChange={e => setData({
                                                       ...data, dateFinAssurance: e.target.value
                                                   })}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Fin contrôle Tech</label>
                                            <input type="date" className="form-control"
                                                   onChange={e => setData({
                                                       ...data, dateControleTech: e.target.value
                                                   })}/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows={3} placeholder="... a propos"
                                                      onChange={e =>
                                                          setData({...data, description: e.target.value})}/>
                                        </div>
                                    </div>


                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-sm btn-success" type="button" onClick={enregistrer}>
                                        Enregistrer
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            : <Loading/>}
        </ClientOnly>
    )
}