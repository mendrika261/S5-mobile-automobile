import Header from "@/app/(app)/ui/Header";
import Footer from "@/app/(app)/ui/Footer";
export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
          <Header/>
          {children}
          <Footer />
      </>
  )
}
