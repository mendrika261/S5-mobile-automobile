"use client"

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    function showPassword() {
        let passwordInput = document.getElementById("password");
        if(passwordInput == null)
            return;
        if(passwordInput.getAttribute("type") == "password") {
            passwordInput.setAttribute("type", "text")
        } else {
            passwordInput.setAttribute("type", "password")
        }
    }

    return (
            <div className="page page-center">
                <div className="container container-normal py-4">
                    <div className="row align-items-center g-4">
                        <div className="col-lg">
                            <div className="container-tight">
                                <div className="text-center mb-4">
                                    <a href=".." className="navbar-brand navbar-brand-autodark"><img
                                        src="/static/logo.svg" height="36" alt=""/></a>
                                </div>
                                <div className="card card-md">
                                    <div className="card-body">
                                        <h2 className="h2 text-center mb-4">Se connecter</h2>
                                        <form method="post" autoComplete="off">
                                            <div className="mb-3">
                                                <label className="form-label">Adresse email</label>
                                                <input type="email" className="form-control"
                                                       placeholder="your@email.com" autoComplete="off"/>
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">
                                                    Mot de passe
                                                    <span className="form-label-description">
                                                      <a href="/forgot-password">Mot de passe oublié</a>
                                                    </span>
                                                </label>
                                                <div className="input-group input-group-flat">
                                                    <input type="password" className="form-control"
                                                           placeholder="Your password" autoComplete="off" id="password" required/>
                                                    <span className="input-group-text">
                                                      <a href="#" className="link-secondary" title="Afficher mot de passe" data-bs-toggle="tooltip" onClick={showPassword}>
                                                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                                               viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                               strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                                                                                                                  fill="none"/><path
                                                              d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path
                                                              d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>
                                                      </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <span className="form-check-label">Enregistrer la connexion</span>
                                                </label>
                                            </div>
                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-primary w-100">Se connecter</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="hr-text">OU</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col"><a href="#" className="btn w-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-github"
                                                     width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                                                     stroke="currentColor" fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path
                                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                                                </svg>
                                                Avec Github
                                            </a></div>
                                            <div className="col"><a href="#" className="btn w-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-twitter"
                                                     width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                                                     stroke="currentColor" fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path
                                                        d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"/>
                                                </svg>
                                                Avec Twitter
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-muted mt-3">
                                    Pas encore de compte? <Link href="/signup">S&apos;inscrire</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg d-none d-lg-block">
                            <Image src="/static/illustrations/undraw_secure_login_pdn4.svg" height="300" width="300"
                                 className="d-block mx-auto" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
    );
}
