import Link from "next/link";
import HomeBanner from "@/app/(app)/ui/HomeBanner";
import HomeSearch from "@/app/(app)/ui/HomeSearch";
import HomeApp from "@/app/(app)/ui/HomeApp";
import HomeLatest from "@/app/(app)/ui/HomeLastest";
import HomeDeveloper from "@/app/(app)/ui/HomeDeveloper";
import Footer from "@/app/(app)/ui/Footer";

export default function Home() {
  return (
      <>
          <HomeBanner />
          <HomeSearch />
          <HomeApp />
          <HomeLatest />
          <HomeDeveloper />
          <Footer />
      </>
    )
}
