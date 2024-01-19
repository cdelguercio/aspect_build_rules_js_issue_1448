import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
import { resolve } from 'node:path';

export default defineConfig({
    resolve: {
        alias: {
            '@issue-1448/example-api': resolve(__dirname, 'node_modules/@issue-1448/example-api'),
        },
    },
    plugins: [commonjs()],
});
