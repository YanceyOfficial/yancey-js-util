import typescript from 'rollup-plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.ts',
  plugins: [typescript({ lib: ['esnext'], target: 'es5' }), uglify()],
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
}
