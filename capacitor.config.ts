import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nextjs.boot',
  appName: 'nextjs-boot',
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
    }
  };

export default config;
