import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import { defineConfig } from 'rollup'

const publicConfig = {
    format: 'umd',
    name: 'yyds'
}

const config = defineConfig([
    {
        input: 'src/index.ts',
        output: [
            { file: './utils.js', ...publicConfig },
            { file: './utils.min.js', ...publicConfig, plugins: [terser()] }
        ],
        plugins: [
            typescript({
                declaration: false
            })
        ]
    },
    // 归并 .d.ts 文件
    {
        input: 'esm/index.d.ts',
        output: {
            file: 'index.d.ts',
            format: 'es'
        },
        plugins: [
            dts()
        ]
    }
])

export default config