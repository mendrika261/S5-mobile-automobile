import Link from "next/link";
import {ANDROID_APP_LINK} from "@/app/(app)/info";


export default function HomeApp() {
    return (
        <>
            <div className="welcome-section content-area-7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 wow fadeInLeft delay-04s">
                            <div className="text">
                                <h1>Application <span>Mobile</span></h1>
                                <p>
                                    Découvrez notre application facile à utiliser! Inscrivez-vous, ajoutez des annonces,
                                    description, photos, et gérez-les en un clin d&apos;œil. Modifiez les statuts,
                                    recevez des notifications pour suivre votre discussion. </p>
                                <Link href={ANDROID_APP_LINK} className="btn btn-lg btn-round btn-theme">Télécharger</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 offset-lg-1 wow fadeInRight delay-04s">
                            <div className="car-slider">
                                <div id="carouselExampleIndicators-managment" className="carousel slide"
                                     data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100 img-fluid" src="/assets/img/welcome-4.png"
                                                 alt="First slide"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
