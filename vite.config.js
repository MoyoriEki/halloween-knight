import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tmpdir } from 'os';
import { join } from 'path';

export default defineConfig({
  // GitHub Pages の公開先 https://moyorieki.github.io/halloween-knight/ に合わせる
  base: '/halloween-knight/',
  plugins: [react()],
  server: { port: 3000 },
  cacheDir: join(tmpdir(), 'srpg-proto-vite'),
});
