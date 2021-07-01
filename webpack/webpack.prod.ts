import merge from 'webpack-merge';

import common from './webpack.common';

import * as path from 'path';

const config = merge(common, {
    mode: `production`,

    output: {
        filename: `[name].bundle.js`,
        path: path.resolve(__dirname, `dist`)
    },

    optimization: {
        splitChunks: {
            chunks: `all`
        }
    }
});

export default config;
