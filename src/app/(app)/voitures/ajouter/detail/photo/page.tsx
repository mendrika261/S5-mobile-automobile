"use client";

import SubBanner from "@/app/(app)/ui/SubBanner";
import ClientOnly from "@/app/(app)/ui/ClientOnly";
import {useState} from "react";
import {getFile, remove_file, sendPut, upload_file, useGet} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";
import {toast} from "react-toastify";
import {useSearchParams} from "next/navigation";
import Loading from "@/app/loading";

export default function AjouterVoiture() {
    const params = useSearchParams();
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(0);
    const [data, setData] = useGet(API_URL + 'voitures/' + params.get("id"), true);
    const [dataC, setDataC] = useGet(API_URL + 'voitures/' + params.get("id"));

    async function enregistrer(btn: any) {
        btn.target.classList.add("btn-loading");

        if(file!=null && file.type.includes("image"))
        {
            const {id} = await upload_file(file, setLoading);
            if(id!=null) {
                let photosData: any[] = [];
                data.photos.map((photo: any) => photosData.push(photo.id));
                photosData.push(id);
                data.photos = photosData;
            } else {
                //toast.error("Erreur lors du téléversement de l'image");
                return;
            }
            const response = await sendPut(API_URL + 'voitures/'+params.get("id"), data);
            if(response != null)
                location?.reload();
        } else {
            toast.error("Veuillez choisir une image");
        }

        btn.target.classList.remove("btn-loading");
    }

    async function supprimer(photoId: string) {
        const lien = dataC.photos.find((photo: any) => photo.id == photoId).lien;
        data.photos = data.photos.filter((photo: any) => photo.id != photoId).map((photo: any) => photo.id);
        const response = await sendPut(API_URL + 'voitures/'+params.get("id"), data);
        if(response != null) {
            await remove_file(lien);
            location?.reload();
        }
    }

    return (
        <ClientOnly>
            <SubBanner titre="Ajouter une photo" />

            {(data && dataC) ?
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
                                    <h4 className="heading">
                                        Les photos de {dataC.sortieVoiture.modele.voiture}
                                        <span className="fa fa-image mx-2"></span>
                                    </h4>
                                    <div className="row mb-3">
                                        {dataC.photos.map(async (photo: any, index: number) =><>
                                            <div className="col-sm-10 col-md-3 overflow-hidden mb-2" key={index}>
                                                <img src={await getFile(photo.lien)} style={{height: '100%', width: '100%', objectFit: 'contain'}}
                                                       alt="Chargement..."/>
                                            </div>
                                            <button className="btn btn-warning" onClick={() => supprimer(photo.id)}>
                                                <i className="fa fa-trash text-white"></i>
                                            </button>
                                        </>)}
                                    </div>

                                    <div className="row mb-3">
                                        <div className="form-group col-sm-12 col-md-10">
                                            <label className="form-label">Téléverser une photo</label>
                                            <input type="file" className="form-control form-control-file"
                                                   onChange={(e) => setFile(e.target.files![0])}
                                            />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-2">
                                            <label className="form-label">5 photos max</label>
                                            <button className="btn btn-sm btn-success form-control" type="button"
                                                    onClick={enregistrer}>
                                                Ajouter
                                                <span className="fa fa-plus mx-2"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="progress mb-2">
                                        <div className="progress-bar" style={{width: `${loading}%`}} role="progressbar">
                                            <span className="visually-hidden">{loading}% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            : <Loading />}
        </ClientOnly>
    )
}