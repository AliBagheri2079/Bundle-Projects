import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {
  terser
} from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';

// can be an array (for multiple inputs)
export default {
  // conditionally required
  input: 'assets/js/index.js',

  // required (can be an array, for multiple outputs)     
  output: [
    // core output options
    {
      file: 'build/bundle_cjs.js', // required
      format: 'cjs', //For Node.js
    },
    {
      file: 'build/bundle_iife.js',
      format: 'iife', //For browsers
    },
    {
      file: 'build/bundle.min.js',
      format: 'umd', //For both browsers and Node.js
      name: 'version',
      plugins: [terser()]
    }
  ],

  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled'
    }),
    sass()
  ],
};