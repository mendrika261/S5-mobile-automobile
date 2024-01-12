import ClientOnly from "@/app/(app)/ui/ClientOnly";
import HomeBanner from "@/app/(app)/ui/HomeBanner";
import HomeSearch from "@/app/(app)/ui/HomeSearch";
import HomeApp from "@/app/(app)/ui/HomeApp";
import HomeLatest from "@/app/(app)/ui/HomeLastest";
import HomeDeveloper from "@/app/(app)/ui/HomeDeveloper";


export default function Home() {
  return (
      <ClientOnly>
          <HomeBanner />
          <HomeSearch />
          <HomeApp />
          <HomeLatest />
          <HomeDeveloper />
      </ClientOnly>
    )
}
