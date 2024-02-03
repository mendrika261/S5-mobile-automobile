export default function SubBanner(
    {titre}:
    {titre: string}
) {
    return (
        <div className="sub-banner overview-bgi">
            <div className="container">
                <div className="page-name">
                    <h1>{titre}</h1>
                </div>
            </div>
            <div className="page-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="breadcrumb-area">
                                <ul>
                                    <li><a href="/">Accueil</a></li>
                                    <li><span>/</span>{titre}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-info">
                                <ul>
                                    <li><a href="/connexion" className="btn btn-md btn-theme">Se connecter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}