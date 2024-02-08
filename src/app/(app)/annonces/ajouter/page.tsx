"use client";

import SubBanner from "@/app/(app)/ui/SubBanner";
import {sendPost, useGet} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";
import Loading from "@/app/loading";
import {useEffect, useState} from "react";

export default function AjouteAnnonce() {
    const [voitures, setVoitures] = useGet(API_URL + "voitures");
    const [data, setData] = useState({voiture: '', prix: '0'});

    async function envoyer(btn: any) {
        btn.target.classList.add('btn-loading');
        const response = await sendPost(API_URL + 'annonces', data);
        if (response != null)
            location.href = '/mes-annonces' + URL_EXTENSION;
        btn.target.classList.remove('btn-loading');
    }

    return (
        <>
            <SubBanner titre="Ajouter une annonce" />

            {voitures ?
            <div className="car-list-fullwidth content-area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-header">
                                    <a href={`/mes-annonces${URL_EXTENSION}`} className="btn btn-icon btn-sm btn-secondary mx-2">
                                        <span className="fa fa-arrow-left"></span>
                                    </a>
                                    <a href={`/voitures/ajouter${URL_EXTENSION}`} className="btn btn-sm btn-primary mx-2">
                                        Ajouter une voiture
                                        <span className="fa fa-plus ml-2"></span>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="form-group col-12">
                                            <label className="form-label">Voiture</label>
                                            <select className="form-control form-select"
                                                    onChange={(e) => setData({...data, voiture: e.target.value})}>
                                                <option>Sélectionner la voiture</option>
                                                {voitures.map((m: any, i: string) => (
                                                    <option key={i} value={m.id}>
                                                        {m.sortieVoiture.modele.marque.nom} - {m.sortieVoiture.modele.nom}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-12">
                                            <label className="form-label">Prix</label>
                                            <input className="form-control" type="number" placeholder="Prix" step={0.01} min={0}
                                                    value={data.prix}
                                                    onChange={(e) => setData({...data, prix: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-sm btn-success" onClick={envoyer}>
                                        Envoyer
                                        <span className="fa fa-paper-plane mx-2"></span>
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