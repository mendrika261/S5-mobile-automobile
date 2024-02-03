import Image from "next/image";
import {DEVS} from "@/app/(app)/info";


export default function HomeDeveloper() {
    return (
        <>
            <div className="testimonial overview-bgi wow fadeInUp delay-04s"
                 style={{backgroundImage: `url(/assets/img/banner-2.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="testimonial-inner">
                                <header className="testimonia-header">
                                    <h1><span>Les</span> développeurs</h1>
                                </header>
                                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        {DEVS.map((dev, index) => (
                                            <li data-target="#carouselExampleIndicators2" data-slide-to={index}
                                                className={index === 0 ? 'active' : ''} key={index}></li>
                                        ))}
                                    </ol>
                                    <div className="carousel-inner">
                                        {DEVS.map((dev, index) => (
                                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                <div className="avatar">
                                                    <Image src={dev.avatar} alt="avatar"
                                                         className="img-fluid rounded-circle" width="200" height="200"/>
                                                </div>
                                                <p className="lead">
                                                    {dev.text}
                                                </p>
                                                <div className="author-name">
                                                    {dev.name}
                                                </div>
                                            </div>
                                        ))}
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
