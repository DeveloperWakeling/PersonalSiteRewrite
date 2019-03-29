const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const apiEndpoint = require('./config/config').api;

//Listing out the plugins here
const htmlPlugin = new HtmlWebpackPlugin({//Plugin for generating html file with a script tag injected
    template: "./src/index.html",
    filename: "./index.html"
});
const copyWebpackPlugin = new CopyWebpackPlugin([
    { from: 'resources' }
]);

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: "[name]_[local]_[hash:base64]",
                        sourceMap: true,
                        minimize: true
                    }
                }],
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [htmlPlugin, 
        copyWebpackPlugin,
        new webpack.DefinePlugin({
            API_URL: process.env.NODE_ENV === 'production' ? JSON.stringify(apiEndpoint) : JSON.stringify('http://localhost')
        })],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      }
};