import {getFile, remove_file, sendDelete} from "@/app/utils/hooks";
import {API_URL, URL_EXTENSION} from "@/app/config";

export default async function VoitureBox(
    {data}: { data: any }
) {

    async function supprimer(id: string) {
        const response = await sendDelete(API_URL + 'voitures/'+id);
        if(response != null) {
            for(let i=0; i<response.photos.length; i++)
                remove_file(response.photos[i].lien);
            location?.reload();
        }
    }

    return (
        <div className="car-box-5 p-box">
            <div className="row">
                {data.photos.length > 0 ?
                    <div className="col-lg-4 col-md-12 col-pad">
                        <a href={`/voitures/ajouter/detail/photo${URL_EXTENSION}?id=${data.id}`} className="car-img">
                            <img className="d-block w-100 img-fluid" src={await getFile(data.photos[0].lien)}
                                 style={{height: '100%', width: '100%', objectFit: 'scale-down'}} />
                        </a>
                    </div>
                    :
                    <div className="col-lg-4 col-md-12 col-pad">
                        <span className="car-img">
                            <img className="d-block w-100 img-fluid" src="/assets/img/noimage.png"/>
                        </span>
                    </div>
                }
                <div className="col-lg-8 col-md-12">
                    <div className="detail ">
                        <h3 className="title">
                            <a href={`/voitures/modifier${URL_EXTENSION}?id=${data.id}`}>
                                {data.sortieVoiture.modele.marque.nom} - {data.sortieVoiture.modele.nom}
                                <span className="fa fa-edit mx-2"></span>
                            </a>
                        </h3>

                        <div className="listing-price">
                            <span className="olg">{data.immatriculation}</span>
                            <span className="new">{data.etatVoiture.designation}</span>
                        </div>
                        <p>{data.description}</p>
                        <ul className="facilities-list clearfix">
                            <li>
                                <i className="flaticon-road"></i>
                                <span>{data.kilometrage} km</span>
                            </li>
                            <li>
                                <i className="flaticon-technology"></i>
                                <span>{data.consommation} L/100</span>
                            </li>
                            <li>
                                <i className="flaticon-petrol"></i>
                                <span>{data.sortieVoiture.energie.nom}</span>
                            </li>
                            <li>
                                <i className="flaticon-car"></i>
                                <span>{data.sortieVoiture.puissance} cv</span>
                            </li>
                            <li>
                                <i className="flaticon-camera"></i>
                                <span>{data.sortieVoiture.boiteVitesse.nom}</span>
                            </li>
                            <li>
                                <i className="flaticon-time"></i>
                                <span>{data.miseEnCirculation}</span>
                            </li>
                            <li>
                                <i className="flaticon-vehicle"></i>
                                <span>{data.sortieVoiture.vitesseMax} km/h</span>
                            </li>
                            <li>
                                <i className="flaticon-people"></i>
                                <span>{data.sortieVoiture.nbrPlace}</span>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-warning" onClick={() => supprimer(data.id)}>
                        Supprimer
                        <span className="fa fa-trash ml-2"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}