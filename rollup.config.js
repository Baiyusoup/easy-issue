import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/issue.js',
    output: {
      file: 'dist/issue.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolve(),
      commonjs({
        ignoreDynamicRequires: true,
      }),
    ],
  },
  {
    input: './src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolve(),
      commonjs({
        ignoreDynamicRequires: true,
      }),
      terser(),
    ],
  },
];
