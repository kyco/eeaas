import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/core',
  plugins: [],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '_eeaas',
      formats: ['es', 'umd'],
      fileName: (format) => (format === 'umd' ? 'eeaas.min.js' : 'index.js'),
    },
    minify: true,
    sourcemap: true,
    outDir: 'dist',
  },

  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}))
