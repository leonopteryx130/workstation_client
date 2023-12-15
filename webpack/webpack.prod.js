const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: "production",
    output: {
        publicPath: "./"
    },
    plugins:[
        new CleanWebpackPlugin(),
    ],
})
