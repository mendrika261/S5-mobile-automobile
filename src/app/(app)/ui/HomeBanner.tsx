import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LINK_APP_LINK} from "@/app/(app)/info";
import {URL_EXTENSION} from "@/app/config";
import {faLink} from "@fortawesome/free-solid-svg-icons";


export default function HomeBanner() {
    return (
        <div className="banner banner-bg" id="particles-banner-wrapper">
            <div id="particles-banner"></div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item item-bg active">
                        <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                            <div className="carousel-content container">
                                <div className="text-left max-w">
                                    <h3 data-animation="animated fadeInDown delay-05s">Fiara Plateforme<br/>
                                        Simple Et Efficace</h3>
                                    <p data-animation="animated fadeInUp delay-10s">
                                        Votre guide de confiance pour l&apos;achat et la vente de voitures
                                    </p>
                                    <a data-animation="animated fadeInUp delay-10s" href={"/connexion"+URL_EXTENSION}
                                       className="btn btn-lg btn-round btn-theme">Commencer</a>
                                    <a data-animation="animated fadeInUp delay-12s" href={LINK_APP_LINK}
                                       className="btn btn-lg btn-round btn-white-lg-outline">Aller sur le site
                                        <FontAwesomeIcon icon={faLink} className="icon" width="15" height="15" style={{marginLeft: '5px'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item item-bg">
                        <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                            <div className="carousel-content container">
                                <div className="text-left max-w">
                                    <h3 data-animation="animated fadeInDown delay-05s">Disponible 24h/24<br/>
                                        Gratuitement</h3>
                                    <p data-animation="animated fadeInUp delay-10s">
                                        Mettre votre annonce ou rechercher une voiture
                                    </p>
                                    <a data-animation="animated fadeInUp delay-10s" href={"/connexion" + URL_EXTENSION}
                                       className="btn btn-lg btn-round btn-theme">Commencer</a>
                                    <a data-animation="animated fadeInUp delay-12s" href={LINK_APP_LINK}
                                       className="btn btn-lg btn-round btn-white-lg-outline">Aller sur le site
                                        <FontAwesomeIcon icon={faLink} className="icon" width="15" height="15"
                                                         style={{marginLeft: '5px'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item item-bg">
                        <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                            <div className="carousel-content container">
                                <div className="text-left max-w">
                                    <h3 data-animation="animated fadeInDown delay-05s">Sans frais <br/> pour
                                        votre achat</h3>
                                    <a data-animation="animated fadeInUp delay-10s" href={"/connexion" + URL_EXTENSION}
                                       className="btn btn-lg btn-round btn-theme">Commencer</a>
                                    <a data-animation="animated fadeInUp delay-12s" href={LINK_APP_LINK}
                                       className="btn btn-lg btn-round btn-white-lg-outline">Aller sur le site
                                        <FontAwesomeIcon icon={faLink} className="icon" width="15" height="15"
                                                         style={{marginLeft: '5px'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-slide="prev">
                    <span className="slider-mover-left" aria-hidden="true">
                        <i className="fa fa-angle-left"></i>
                    </span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                   data-slide="next">
                    <span className="slider-mover-right" aria-hidden="true">
                        <i className="fa fa-angle-right"></i>
                    </span>
                </a>
            </div>
        </div>
    )
}

