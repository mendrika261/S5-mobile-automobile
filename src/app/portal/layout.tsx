import Header from "@/app/portal/ui/Header";
import Navbar from "@/app/portal/ui/Navbar";
import Footer from "@/app/portal/ui/Footer";
import { Viewport } from 'next'

export const viewport: Viewport  = {
    viewportFit: 'cover',
    width: 'device-width',
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="page">
          <Header/>
          <Navbar/>
          <div className="page-wrapper">
              {children}
              <Footer/>
          </div>
      </div>
  )
}
