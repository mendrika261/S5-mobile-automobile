"use client";

import Link from "next/link";
import ClientOnly from "@/app/(app)/ui/ClientOnly";

export default function HomeLatest() {
    return (
        <ClientOnly>
            <div className="featured-car content-area-2 bg-grea">
                <div className="container">
                    <div className="main-title">
                        <h1><span>Dernières</span> Annonces</h1>
                        <p>Profitez vite de nos dernières annonces</p>
                    </div>

                    <div className="slick-slider-area">
                        <div className="row slick-carousel"
                             data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'>
                            <div className="slick-slide-item">
                                <div className="car-box-4">
                                    <div className="car-thumbnail">
                                        <Link href="/" className="car-img">
                                            <img src="/assets/img/car-list-1.jpg" alt="car-list" className="img-fluid"/>
                                        </Link>
                                        <div className="car-overlay">
                                            <Link href="/" className="overlay-link">
                                                <i className="fa fa-link"></i>
                                            </Link>
                                            <button className="overlay-link car-video" title="Test Title">
                                                <i className="fa fa-video-camera"></i>
                                            </button>
                                            <div className="car-magnify-gallery">
                                                <Link href="/assets/img/car-1.jpg" className="overlay-link">
                                                    <i className="fa fa-expand"></i>
                                                </Link>
                                                <Link href="/assets/img/car-6.jpg" className="hidden"></Link>
                                                <Link href="/assets/img/car-4.jpg" className="hidden"></Link>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3><Link href="/">Audi A7 TDI</Link></h3>
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
                            </div>
                            <div className="slick-slide-item">
                                <div className="car-box-4">
                                    <div className="car-thumbnail">
                                        <Link href="/" className="car-img">
                                            <img src="/assets/img/car-list-1.jpg" alt="car-list" className="img-fluid"/>
                                        </Link>
                                        <div className="car-overlay">
                                            <Link href="/" className="overlay-link">
                                                <i className="fa fa-link"></i>
                                            </Link>
                                            <button className="overlay-link car-video" title="Test Title">
                                                <i className="fa fa-video-camera"></i>
                                            </button>
                                            <div className="car-magnify-gallery">
                                                <Link href="/assets/img/car-1.jpg" className="overlay-link">
                                                    <i className="fa fa-expand"></i>
                                                </Link>
                                                <Link href="/assets/img/car-6.jpg" className="hidden"></Link>
                                                <Link href="/assets/img/car-4.jpg" className="hidden"></Link>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3><Link href="/">Audi A7 TDI</Link></h3>
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
                            </div>
                            <div className="slick-slide-item">
                                <div className="car-box-4">
                                    <div className="car-thumbnail">
                                        <Link href="/" className="car-img">
                                            <img src="/assets/img/car-list-1.jpg" alt="car-list" className="img-fluid"/>
                                        </Link>
                                        <div className="car-overlay">
                                            <Link href="/" className="overlay-link">
                                                <i className="fa fa-link"></i>
                                            </Link>
                                            <button className="overlay-link car-video" title="Test Title">
                                                <i className="fa fa-video-camera"></i>
                                            </button>
                                            <div className="car-magnify-gallery">
                                                <Link href="/assets/img/car-1.jpg" className="overlay-link">
                                                    <i className="fa fa-expand"></i>
                                                </Link>
                                                <Link href="/assets/img/car-6.jpg" className="hidden"></Link>
                                                <Link href="/assets/img/car-4.jpg" className="hidden"></Link>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3><Link href="/">Audi A7 TDI</Link></h3>
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
                            </div>
                        </div>

                        <div className="slick-prev slick-arrow-buton">
                            <i className="fa fa-angle-left"></i>
                        </div>
                        <div className="slick-next slick-arrow-buton">
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal car-modal fade" id="carModal" role="dialog" aria-labelledby="carModal"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 modal-left">
                                    <div className="modal-left-content">
                                        <div id="modalCarousel" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <iframe className="modalIframe"
                                                            src="https://www.youtube.com/embed/5e0LxrLSzok"
                                                            allowFullScreen></iframe>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/assets/img/car-1.jpg" alt="Test ALT"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/assets/img/car-1.jpg" alt="Test ALT"/>
                                                </div>
                                            </div>
                                            <Link className="control control-prev" href="#modalCarousel" role="button"
                                                  data-slide="prev">
                                                <i className="fa fa-angle-left"></i>
                                            </Link>
                                            <Link className="control control-next" href="#modalCarousel" role="button"
                                               data-slide="next">
                                                <i className="fa fa-angle-right"></i>
                                            </Link>
                                        </div>
                                        <div className="description"><h3>Description</h3>
                                            <p>
                                                Curabitur odio nibh, luctus non pulvinar a, ultricies ac diam. Donec
                                                neque
                                                massa, viverra interdum eros ut, imperdiet pellentesque mauris. Proin
                                                sit amet
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 modal-right">
                                    <div className="modal-right-content bg-white">
                                        <strong className="price">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </strong>
                                        <section>
                                            <h3>Audi A5</h3>
                                            <ul className="bullets">
                                                <li><i className="fa fa-arrow-right"></i> Audio Interface</li>
                                                <li><i className="fa fa-arrow-right"></i> CDR Audio</li>
                                                <li><i className="fa fa-arrow-right"></i> Seat Heating</li>
                                                <li><i className="fa fa-arrow-right"></i> ParkAssist</li>
                                                <li><i className="fa fa-arrow-right"></i> Cruise Control</li>
                                                <li><i className="fa fa-arrow-right"></i> Airbags</li>
                                                <li><i className="fa fa-arrow-right"></i> Air Conditioning</li>
                                                <li><i className="fa fa-arrow-right"></i> Alarm System</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3>Overview</h3>
                                            <dl>
                                                <dt>Model</dt>
                                                <dd>BMW</dd>
                                                <dt>Condition</dt>
                                                <dd>Brand New</dd>
                                                <dt>Year</dt>
                                                <dd>2018</dd>
                                                <dt>Mileage</dt>
                                                <dd>37,000 mi</dd>
                                                <dt>Price</dt>
                                                <dd>$178,000</dd>
                                            </dl>
                                        </section>
                                        <Link href="/" className="btn btn-theme">Show Detail</Link>
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
