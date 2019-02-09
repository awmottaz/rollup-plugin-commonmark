import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import builtins from 'rollup-plugin-node-builtins'

export default {
  input: pkg.module,
  output: {
    format: 'cjs',
    file: pkg.main
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    builtins()
  ]
}
