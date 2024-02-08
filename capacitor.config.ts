import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mg.itu.fiara',
  appName: 'Fiara',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
,
    android: {
       buildOptions: {
          keystorePath: '/Users/mendrika/android/android',
          keystoreAlias: 'key0',
       }
    },
    plugins: {
        PushNotifications: {
            presentationOptions: ["badge", "sound", "alert"],
        },
    },
  };

export default config;
