"use client";

import ClientOnly from "@/app/(app)/ui/ClientOnly";
import HomeBanner from "@/app/(app)/ui/HomeBanner";
import {useEffect} from "react";
import {URL_EXTENSION} from "@/app/config";

export default function Home() {
    useEffect(() => {
        if(localStorage?.getItem("token") != null) {
            location?.replace("/mes-annonces"+URL_EXTENSION);
        }
    }, []);
  return (
      <ClientOnly>
          <HomeBanner />
      </ClientOnly>
    )
}
