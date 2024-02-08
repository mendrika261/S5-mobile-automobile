import {getFile, remove_file, sendDelete, sendPut} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";

export default async function VoitureBox(
    {data}: { data: any }
) {

    async function supprimer(id: string) {
        const response = await sendDelete(API_URL + 'annonces/'+id);
        if(response != null) {
            for(let i=0; i<response.voiture.photos.length; i++)
                remove_file(response.voiture.photos[i].lien);
            location?.reload();
        }
    }

    async function terminer(id: string, etat: number) {
        const response = await sendPut(API_URL + 'annonces/'+id, {etat: etat});
        if(response != null) {
            location?.reload();
        }
    }

    function getColorEtat(etat: number) {
        if (etat === 10) return 'bg-success';
        if (etat === 0) return 'bg-secondary';
        if (etat === -10) return 'bg-danger';
        return '';
    }

    return (
        <div className="car-box-5 p-box">
            <div className="row">
                    <div className="col-lg-4 col-md-12 col-pad">
                        <a href={`/voitures/ajouter/detail/photo${URL_EXTENSION}?id=${data.voiture.id}`}
                           className="car-img">
                            <div className={`listing-time opening ${getColorEtat(data.etat)}`}>
                                {data.etatLibelle}
                            </div>
                            {data.voiture.photos.length > 0 ?
                            <img className="d-block w-100 img-fluid" src={await getFile(data.voiture.photos[0].lien)}
                                 style={{height: '100%', width: '100%', objectFit: 'scale-down'}}/>:
                            <img className="d-block w-100 img-fluid" src="/assets/img/noimage.png"/>}
                        </a>
                    </div>
                <div className="col-lg-8 col-md-12">
                    <div className="detail ">
                        <h3 className="title">
                            <a href={`/voitures/modifier${URL_EXTENSION}?id=${data.voiture.id}`}>
                                {data.voiture.sortieVoiture.modele.marque.nom} - {data.voiture.sortieVoiture.modele.nom}
                                <span className="fa fa-edit mx-2"></span>
                            </a>
                        </h3>

                        <div className="listing-price">
                            <span className="olg">Commission: MGA {data.valeurCommission}</span>
                            <span className="new">Prix: MGA {data.prix}</span>
                        </div>

                        <p>{data.voiture.description}</p>
                        <ul className="facilities-list clearfix">
                            <li>
                                <i className="flaticon-road"></i>
                                <span>{data.voiture.kilometrage} km</span>
                            </li>
                            <li>
                                <i className="flaticon-technology"></i>
                                <span>{data.voiture.consommation} L/100</span>
                            </li>
                            <li>
                                <i className="flaticon-petrol"></i>
                                <span>{data.voiture.sortieVoiture.energie.nom}</span>
                            </li>
                            <li>
                                <i className="flaticon-car"></i>
                                <span>{data.voiture.sortieVoiture.puissance} cv</span>
                            </li>
                            <li>
                                <i className="flaticon-camera"></i>
                                <span>{data.voiture.sortieVoiture.boiteVitesse.nom}</span>
                            </li>
                            <li>
                                <i className="flaticon-time"></i>
                                <span>{data.voiture.miseEnCirculation}</span>
                            </li>
                            <li>
                                <i className="flaticon-vehicle"></i>
                                <span>{data.voiture.sortieVoiture.vitesseMax} km/h</span>
                            </li>
                            <li>
                                <i className="flaticon-people"></i>
                                <span>{data.voiture.sortieVoiture.nbrPlace}</span>
                            </li>
                        </ul>
                    </div>
                    {data.etat == 10 ?
                        <button className="btn btn-primary" onClick={() => terminer(data.id, 20)}>
                            Terminer
                            <span className="fa fa-check ml-2"></span>
                        </button> :
                        <button className="btn btn-warning" onClick={() => supprimer(data.id)}>
                            Supprimer
                            <span className="fa fa-trash ml-2"></span>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}