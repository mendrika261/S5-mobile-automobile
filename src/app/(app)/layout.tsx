import Header from "@/app/(app)/ui/Header";
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
