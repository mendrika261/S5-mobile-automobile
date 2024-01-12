import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nextjs.boot',
  appName: 'nextjs-boot',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
