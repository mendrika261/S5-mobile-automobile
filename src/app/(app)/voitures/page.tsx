"use client";

import SubBanner from "@/app/(app)/ui/SubBanner";
import Link from "next/link";



export default function ListAnnonce() {
    return (
        <>
            <SubBanner titre="Mes voitures" />

            <div className="car-list-fullwidth content-area-2">
                <div className="container">
                    <div className="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                        <div className="row clearfix">
                            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5">
                                <h4 className="heading">20 Voitures</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12">
                                    <Link href={"/voitures/ajouter"} className="btn btn-md btn-theme col-12">
                                        Ajouter une voiture
                                    </Link>
                                </div>
                            </div>

                            <div className="pagination-box">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link"
                                                                     href="car-list-leftside.html"><span
                                            aria-hidden="true">«</span></a></li>
                                        <li className="page-item"><a className="page-link"
                                                                     href="car-list-rightside.html">1</a></li>
                                        <li className="page-item"><a className="page-link"
                                                                     href="car-list-leftside.html">2</a></li>
                                        <li className="page-item"><a className="page-link  active"
                                                                     href="car-list-fullwidth.html">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><span
                                            aria-hidden="true">»</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}