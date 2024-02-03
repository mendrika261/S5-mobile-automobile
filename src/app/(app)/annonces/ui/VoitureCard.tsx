export default function VoitureCard() {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="car-box">
                <div className="car-thumbnail">
                    <a href="car-details.html" className="car-img">
                        <div className="listing-badges">
                            <span className="featured">Featured</span>
                        </div>
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
                                    <img className="d-block w-100" src="assets/img/car-1.jpg"
                                         alt="car"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/car-1.jpg"
                                         alt="car"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/car-1.jpg"
                                         alt="car"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="detail">
                    <div className="heading clearfix">
                        <div className="title pull-left">
                            <a href="car-details.html">Audi A7 TDI</a>
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
    )
}