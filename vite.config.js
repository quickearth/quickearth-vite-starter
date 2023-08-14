import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'

export default defineConfig({
    plugins: [
        splitVendorChunkPlugin(),
        viteExternalsPlugin({
            cesium: 'Cesium',
        })
    ],
})