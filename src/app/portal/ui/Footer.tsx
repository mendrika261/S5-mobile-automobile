export default function Footer() {
    return (
        <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-lg-auto ms-lg-auto">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item"><a href="https://tabler.io/docs" target="_blank"
                                                                className="link-secondary"
                                                                rel="noopener">Documentation</a></li>
                            <li className="list-inline-item"><a href=""
                                                                className="link-secondary">License</a></li>
                            <li className="list-inline-item"><a href="https://github.com/tabler/tabler"
                                                                target="_blank" className="link-secondary"
                                                                rel="noopener">Source code</a></li>
                            <li className="list-inline-item">
                                <a href="https://github.com/sponsors/codecalm" target="_blank"
                                   className="link-secondary" rel="noopener">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon text-pink icon-filled icon-inline" width="24" height="24"
                                         viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
                                    </svg>
                                    Sponsor
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                Copyright &copy; {new Date().getFullYear()}
                                <a href="." className="link-secondary">Tabler</a>.
                                All rights reserved.
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="link-secondary" rel="noopener">
                                    v1.0
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}