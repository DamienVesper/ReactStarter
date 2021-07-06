import merge from 'webpack-merge';
import common from './webpack.common';

import * as Webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `development`,
    devtool: `source-map`,

    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, `../src/index.html`),
            filename: path.resolve(__dirname, `../public/index.html`)
        }),
        new Webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: path.resolve(__dirname, `../public`),
        historyApiFallback: true,
        port: 3000,
        publicPath: `http://localhost:3000/dist`,
        hotOnly: true
    }
});

export default config;
