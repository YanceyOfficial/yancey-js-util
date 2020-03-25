import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import process from 'process'

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      lib: ['esnext'],
      target: 'esnext',
      useTsconfigDeclarationDir: false,
      declarationDir: `${process.cwd()}/lib`,
    }),
    terser(),
    filesize(),
  ],
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
}
