const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production' 

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname,'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(!isDevelopment),
            PORT: JSON.stringify(8000),
            TEXT_EXAMPLE: JSON.stringify('Webpack!'),
            VERSION: JSON.stringify('5fa3b9'),
        }),
        new DotenvPlugin(),
        new HtmlWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}