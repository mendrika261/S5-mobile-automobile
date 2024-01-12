'use client';

//import type { Metadata } from 'next';
import Script from "next/script";
import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/css/demo.min.css";
// import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';
import '@/app/global.css';

import { setupIonicReact } from '@ionic/react';
import React from "react";

setupIonicReact();

/*export const metadata: Metadata = {
  title: 'NextBoot',
  description: 'Generated by create next app',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  
}) {
  return (
      <html lang="fr">
          <body>
              <Script src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/js/tabler.min.js"/>
              <Script src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/js/demo.min.js"/>
              <Script src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/js/demo-theme.min.js"/>
              {children}
          </body>
      </html>
  )
}