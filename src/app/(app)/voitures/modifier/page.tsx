"use client";

import SubBanner from "@/app/(app)/ui/SubBanner";
import ClientOnly from "@/app/(app)/ui/ClientOnly";
import {useEffect, useState} from "react";
import {sendPut, useGet} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";
import Loading from "@/app/loading";
import {useSearchParams} from "next/navigation";

export default function ModifierVoiture() {
    const params = useSearchParams();
    const [data, setData] = useGet(API_URL+"voitures/"+params.get("id"), true);
    const [etatVoitures, setEtatVoitures] = useGet(API_URL+"etat-voitures");
    const [couleurs, setCouleurs] = useGet(API_URL+"couleurs");
    const [couleur, setCouleur] = useState("");
    const [isFirst, setIsFirst] = useState(true);

    useEffect(() => {
        if(data==null || couleurs == null || !isFirst) return;
        const couleur = couleurs.filter((couleur: any) => couleur.id == data.couleur);
        setCouleur(couleur[0].codeCouleur);
        if(data.photos.length > 0)
            data.photos = data.photos.map((photo: any) => photo.id);
        setIsFirst(false);
    }, [data, couleurs]);

    async function enregistrer(btn: any) {
        btn.target.classList.add("btn-loading");
        const response = await sendPut(API_URL+"voitures/"+params.get("id"), data);
        btn.target.classList.remove("btn-loading");

        if (response != null) {
            localStorage?.setItem("voiture", JSON.stringify(response));
            location?.replace("/voitures/ajouter/detail/photo" + URL_EXTENSION + "?id=" + response.id);
        }
    }

    return (
        <ClientOnly>
            <SubBanner titre="Modifier une voiture" />

            {(data && etatVoitures && couleurs) ?
            <div className="car-list-fullwidth content-area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-header">
                                    <a href={`/voitures${URL_EXTENSION}`} className="btn btn-sm btn-primary mx-2">
                                        Mes voitures
                                        <span className="fa fa-car mx-2"></span>
                                    </a>
                                </div>
                                <div className="card-body">

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Kilométrage (km)</label>
                                            <input type="number" className="form-control" min={0} placeholder="50000"
                                                   value={data.kilometrage}
                                                   onChange={e =>
                                                       setData({...data, kilometrage: e.target.value})}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Kilométrage vidange (km)</label>
                                            <input type="number" className="form-control" min={0} placeholder="2000"
                                                   value={data.kilometrageVidange}
                                                   onChange={e => setData({
                                                       ...data,
                                                       kilometrageVidange: e.target.value
                                                   })}/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Etat actuel</label>
                                            <select className="form-control form-select" defaultValue={data.etatVoiture}
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
                                                    defaultValue={data.premiereMain}
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
                                                    defaultValue={`${data.couleur}`}
                                                    onChange={e => {
                                                        const couleur = couleurs.filter((couleur: any) => couleur.id == e.target.value);
                                                        setData({...data, couleur: couleur[0].id});
                                                        setCouleur(couleur[0].codeCouleur);
                                                    }}>
                                                {couleurs.map((couleur: any, index: string) => (
                                                    <option key={index}
                                                            value={`${couleur.id}`}>{couleur.nom}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Mise en circulation</label>
                                            <input type="number" className="form-control" min={1900} placeholder={"AAAA"}
                                                   maxLength={4}
                                                   value={data.miseEnCirculation}
                                                   onChange={e => setData({
                                                       ...data,
                                                       miseEnCirculation: e.target.value
                                                   })}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Immatriculation</label>
                                            <input type="text" className="form-control" placeholder={"0000AAA"}
                                                   value={data.immatriculation}
                                                   onChange={e =>
                                                       setData({...data, immatriculation: e.target.value})}/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-6">
                                            <label className="form-label">Fin assurance</label>
                                            <input type="date" className="form-control"
                                                   value={data.dateFinAssurance}
                                                   onChange={e => setData({
                                                       ...data, dateFinAssurance: e.target.value
                                                   })}/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label className="form-label">Fin contrôle Tech</label>
                                            <input type="date" className="form-control"
                                                   value={data.dateControleTech}
                                                   onChange={e => setData({
                                                       ...data, dateControleTech: e.target.value
                                                   })}/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows={3} placeholder="... a propos"
                                                      value={data.description}
                                                      onChange={e =>
                                                          setData({...data, description: e.target.value})}/>
                                        </div>
                                    </div>


                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-sm btn-warning" type="button" onClick={enregistrer}>
                                        Modifier
                                        <span className="fa fa-edit mx-2"></span>
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