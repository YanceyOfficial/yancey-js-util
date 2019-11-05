import typescript from 'rollup-plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({ lib: ['esnext'], target: 'es5' }),
    uglify(),
    filesize(),
  ],
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
}
