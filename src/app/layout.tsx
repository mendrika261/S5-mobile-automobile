'use client';

// import "@tabler/core/dist/css/tabler.min.css";

/* Basic CSS for apps built with Ionic */
//import '@ionic/react/css/core.css';
//import '@ionic/react/css/normalize.css';
//import '@ionic/react/css/structure.css';
//import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';
import '@/app/global.css';

import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/jquery.selectBox.css";
//import "./assets/css/dropzone.css";
import "./assets/css/rangeslider.css";
import "./assets/css/animate.min.css";
import "./assets/css/slick.css";
//import "./assets/css/jquery.mCustomScrollbar.css";
import "./assets/fonts/font-awesome/css/font-awesome.min.css";
import "./assets/fonts/flaticon/font/flaticon.css";
import "./assets/css/style.css";
import "./assets/css/skins/default.css";
import 'react-toastify/dist/ReactToastify.css';


import { setupIonicReact } from '@ionic/react';
import React, {useEffect, useState} from "react";
import Script from "next/script";
import {Viewport} from "next";
import Toast from "@/app/(app)/ui/Toast";
import ClientOnly from "@/app/(app)/ui/ClientOnly";
import Loading from "@/app/loading";

setupIonicReact(
    {
        swipeBackEnabled: false,
    }
);

export const viewport: Viewport  = {
    viewportFit: 'cover',
    width: 'device-width',
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="fr">
      <body id="top">
      <>
          <>
              {children}
          </>
      </>
      <Toast/>

      <Script src="/assets/js/jquery-2.2.0.min.js"/>
      <Script src="/assets/js/popper.min.js"/>
      <Script src="/assets/js/bootstrap.min.js"/>
      <Script src="/assets/js/jquery.selectBox.js"/>
      <Script src="/assets/js/rangeslider.js"/>
      <Script src="/assets/js/jquery.magnific-popup.min.js"/>
      <Script src="/assets/js/jquery.filterizr.js"/>
      <Script src="/assets/js/wow.min.js"/>
      <Script src="/assets/js/backstretch.js"/>
      <Script src="/assets/js/jquery.countdown.js"/>
      <Script src="/assets/js/jquery.scrollUp.js"/>
      <Script src="/assets/js/particles.min.js"/>
      <Script src="/assets/js/typed.min.js"/>
      <Script src="/assets/js/dropzone.js"/>
      <Script src="/assets/js/jquery.mb.YTPlayer.js"/>
      <Script src="/assets/js/slick.min.js"/>
      <Script src="/assets/js/jquery.mCustomScrollbar.concat.min.js"/>
      <Script src="/assets/js/ie-emulation-modes-warning.js"/>
      <Script src="/assets/js/app.js"/>
      </body>
      </html>
  )
}
