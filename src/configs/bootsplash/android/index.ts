import { execSync } from 'node:child_process';
import { bootsplashConfig } from './config';

export function generateBootsplash(platform: 'android' | 'ios' | 'both' = 'android') {
    const platforms =
        platform === 'both' ? 'android,ios' : platform;

    const cmd = [
        'npx react-native-bootsplash generate',
        bootsplashConfig.logoPath,
        `--platforms=${platforms}`,
        `--background=${bootsplashConfig.backgroundColor.replace('#', '')}`,
        `--logo-width=${bootsplashConfig.logoWidth}`,
        `--assets-output=${bootsplashConfig.assetsOutput}`,
        bootsplashConfig.flavor ? `--flavor=${bootsplashConfig.flavor}` : '',
    ].join(' ');

    console.log('⚙️  Running:', cmd);
    execSync(cmd, { stdio: 'inherit' });
    console.log('✅ BootSplash assets generated.');
}
