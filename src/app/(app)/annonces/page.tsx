"use client";

import Recherche from "@/app/(app)/annonces/ui/Recherche";
import Categorie from "@/app/(app)/annonces/ui/Categorie";
import ClientOnly from "@/app/(app)/ui/ClientOnly";
import VoitureCard from "@/app/(app)/annonces/ui/VoitureCard";
import SubBanner from "@/app/(app)/ui/SubBanner";

export default function ListAnnonce() {
    return (
        <ClientOnly>
            <SubBanner titre="Les annonces"/>
            <div className="car-list-rightside content-area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar mrb">
                                <Recherche/>
                                <Categorie/>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                                <div className="row clearfix">
                                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5">
                                        <h4 className="heading">20 Résultats</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <VoitureCard/>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="car-box">
                                        <div className="car-thumbnail">
                                            <a href="car-details.html" className="car-img">
                                                <img src="assets/img/car-6.jpg" alt="car" className="img-fluid"/>
                                            </a>
                                        </div>
                                        <div className="detail">
                                            <div className="heading clearfix">
                                                <div className="title pull-left">
                                                    <a href="car-details.html">2016 Audi R8</a>
                                                </div>
                                                <div className="price pull-right">
                                                    $178,000
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the</p>
                                            <ul className="facilities-list clearfix">
                                                <li className="bordered-right">
                                                    <i className="flaticon-transport-4"></i> Sport
                                                </li>
                                                <li className="bordered-right">
                                                    <i className="flaticon-road"></i> 17,000
                                                </li>
                                                <li>
                                                    <i className="flaticon-petrol"></i> Diesel
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="pagination-box">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link"
                                                                             href="car-grid-rightside.html"><span
                                                    aria-hidden="true">«</span></a></li>
                                                <li className="page-item"><a className="page-link"
                                                                             href="car-grid-rightside.html">1</a></li>
                                                <li className="page-item"><a className="page-link active"
                                                                             href="car-grid-leftside.html">2</a></li>
                                                <li className="page-item"><a className="page-link "
                                                                             href="car-grid-fullwidth.html">3</a></li>
                                                <li className="page-item"><a className="page-link"
                                                                             href="car-grid-fullwidth.html"><span
                                                    aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ClientOnly>
    )
}