import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Use the actual key if available (dev), or a placeholder string (prod/docker build)
      // The Dockerfile entrypoint will replace this placeholder with the real runtime env var
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || "__VITE_API_KEY_PLACEHOLDER__"),
      'process.env': {} 
    },
    server: {
      port: 8080,
      host: '0.0.0.0'
    }
  };
});