const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            test: /\.mp3$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'media', to: 'media' }
            ]
        }),
        // new BundleAnalyzerPlugin(),
    ]
}