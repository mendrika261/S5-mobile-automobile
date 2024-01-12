import Link from "next/link";

export default function Home() {
  return (
      <>
          <div className="page-header d-print-none">
              <div className="container-xl">
                  <div className="row g-2 align-items-center">
                      <div className="col">
                          <h2 className="page-title">
                              Bienvenue
                          </h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="page-body">
              <div className="container-xl">
                <Link href="/portal/">Connexion</Link>
              </div>
          </div>
      </>
  )
}
