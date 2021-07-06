import merge from 'webpack-merge';

import common from './webpack.common';

import * as path from 'path';

const config = merge(common, {
    mode: `production`,

    output: {
        path: path.resolve(__dirname, `../dist/static/js`),
        filename: `[name].[contenthash:8].js`,
        chunkFilename: `[name].[contenthash:8].chunk.js`
    },

    optimization: {
        splitChunks: {
            chunks: `all`,
            name: false
        },

        runtimeChunk: {
            name: (entrypoint: any) => `runtime-${entrypoint.name}`
        }
    }
});

export default config;
