import Link from "next/link";

export default function NotFound() {
    return (
        <div className="pages-404 content-area-7">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pages-404-inner">
                            <h1>404</h1>
                            <div className="e404">
                                <h5>Oops! Page Introuvable!</h5>
                                <Link className="btn btn-border btn-sm" href="/" role="button">Retour à l&apos;accueil</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
