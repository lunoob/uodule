import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'
import { defineConfig } from 'rollup'

const publicConfig = {
    format: 'umd',
    name: 'utils'
}

const config = defineConfig([
    {
        input: 'src/index.ts',
        output: [
            { file: 'index.js', ...publicConfig },
            { file: 'index.min.js', ...publicConfig, plugins: [terser()] }
        ],
        plugins: [
            typescript({
                declaration: false
            })
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'index.mjs',
            format: 'esm'
        },
        plugins: [
            typescript({
                declaration: false
            })
        ]
    },
    // 归并 .d.ts 文件
    {
        input: 'types/index.d.ts',
        output: {
            file: 'index.d.ts',
            format: 'es'
        },
        plugins: [
            dts(),
            del({
                targets: 'types',
                hook: 'buildEnd'
            })
        ]
    }
])

export default config