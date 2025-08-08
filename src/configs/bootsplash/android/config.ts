import path from 'node:path';

export const bootsplashConfig = {
  // ✅ dùng absolute path – an toàn khi chạy từ Gradle
  logoPath: path.resolve(__dirname, '../../../assets/images/logoApp.png'),
  platforms: ['android', 'ios'] as const,
  backgroundColor: '#F5FCFF',
  logoWidth: 100,
  assetsOutput: 'assets/bootsplash',
  flavor: 'main',
};
