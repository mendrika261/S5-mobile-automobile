import Header from "@/app/(app)/ui/Header";
import Footer from "@/app/(app)/ui/Footer";
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
          <div className="page-wrapper">
              {children}
              <Footer/>
          </div>
      </div>
  )
}
