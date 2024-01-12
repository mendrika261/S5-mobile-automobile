import Image from "next/image";
import {MENU} from "@/app/(app)/info";
import Link from "next/link";

export default function Header() {
    return (
        <header className="main-header sticky-header" id="main-header-2" style={{zIndex: 10000}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light rounded">
                            <Link className="navbar-brand logo navbar-brand d-flex mr-auto" href="/">
                                <img src="/assets/img/logos/black-logo.png" alt="logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="navbar-collapse collapse w-100" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                    {MENU.map((item, index) => (
                                        <li key={index} className="nav-item">
                                            <Link className="nav-link" href={item.url}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}