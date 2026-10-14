import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile();
  } catch {
    // .env file is optional
  }
}

const port = process.env.PORT || process.env.ADMIN_PORT || 8000;
const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
const args = [nextBin, 'start', '-p', String(port), ...process.argv.slice(2)];

const child = spawn(process.execPath, args, {
  stdio: 'inherit',
  env: { ...process.env, PORT: String(port) }
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
