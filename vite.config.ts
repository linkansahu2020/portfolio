import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    build: {
      outDir: 'build',
      assetsDir: 'static',
      sourcemap: true,
      minify: 'terser',
    },
    server: {
      host: 'local.project.com',
      port: 3005,
      strictPort: true,
      open: true,
    },
    plugins: [react(), svgrPlugin(), tsconfigPaths()],
  };
});
