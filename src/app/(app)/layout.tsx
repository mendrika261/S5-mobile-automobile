import Header from "@/app/(app)/ui/Header";
import Footer from "@/app/(app)/ui/Footer";
import SubBanner from "@/app/(app)/ui/SubBanner";
export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
          <Header/>
          {children}
      </>
  )
}
