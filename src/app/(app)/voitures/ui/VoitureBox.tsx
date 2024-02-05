import Link from "next/link";

export default function VoitureBox(
    {data}: { data: any }
) {

    return (
        <div className="car-box-5 p-box">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-pad">
                    <Link href={`/voitures/${data.id}`} className="car-img">
                        <div id="carouselExampleIndicators1" className="carousel slide"
                             data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators1" data-slide-to="0"
                                    className="active"></li>
                                <li data-target="#carouselExampleIndicators1"
                                    data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators1"
                                    data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="assets/img/car-list-1.jpg"
                                         alt="car-list"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/car-list-1.jpg"
                                         alt="car-list"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/car-list-1.jpg"
                                         alt="car-list"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="detail ">
                        <h3 className="title">
                            <a href="car-details.html">Audi A7 TDI</a>
                        </h3>

                        <div className="listing-price">
                            <span className="olg"><del>$1250.00</del></span><span
                            className="new">$1000.00</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
                            tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et
                            vel eros. Maecenas eros enim, tincidunt vel turpis vel,dapibus tempus
                            nulla. Donec vel nulla dui. Pellentesque sed ante sed ligula hendrerit
                            condimentum. Suspendisse rhoncus fringilla ipsum quis porta.</p>
                        <ul className="facilities-list clearfix">
                            <li>
                                <i className="flaticon-road"></i>
                                <span>12000</span>
                            </li>
                            <li>
                                <i className="flaticon-transport-4"></i>
                                <span>Sport Car</span>
                            </li>
                            <li>
                                <i className="flaticon-petrol"></i>
                                <span>Diesel</span>
                            </li>
                            <li>
                                <i className="flaticon-car"></i>
                                <span>320Hp</span>
                            </li>
                            <li>
                                <i className="flaticon-camera"></i>
                                <span>Automatic</span>
                            </li>
                            <li>
                                <i className="flaticon-time"></i>
                                <span>2018</span>
                            </li>
                        </ul>
                    </div>
                    <a href="car-details.html" className="btn btn-theme">Details</a>
                </div>
            </div>
        </div>
    )
}