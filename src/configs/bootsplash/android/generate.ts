import { generateBootsplash } from './index';

// đọc tham số từ CLI nếu muốn: --platform android|ios|both
const arg = process.argv.find(a => a.startsWith('--platform='));
const value = arg?.split('=')[1] as 'android' | 'ios' | 'both' | undefined;

generateBootsplash(value ?? 'android');
