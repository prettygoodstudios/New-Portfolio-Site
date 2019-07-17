const path = require('path');
const devConfig = require("./webpack.config");
const webpack = require("webpack");

module.exports = {
    ...devConfig,
    module: {
        ...devConfig.module,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
            'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}