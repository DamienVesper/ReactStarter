import merge from 'webpack-merge';
import HTMLWebpackPlugin from 'html-webpack-plugin';

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
    },

    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, `../public/index.html`),

            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ]
});

export default config;
