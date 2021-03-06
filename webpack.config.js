const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "dist/",
    filename: 'bundle.js'
  },
  mode: "production",
  module: {
      rules: [
        {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: "[name].[ext]",
              outputPath: "fonts"
            },
          },
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    outputPath: "images"
                },
              },
            ],
          }
      ]
  }
};
