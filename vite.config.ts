import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { defineConfig as defineVitestConfig, mergeConfig } from 'vitest/config';
import path from 'node:path'


// https://vitejs.dev/config/
const viteConfig = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

export default mergeConfig(viteConfig, defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
}))

