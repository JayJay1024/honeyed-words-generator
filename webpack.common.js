const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: '土味情话 在线生成 - honeyed words generator'}),
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader'
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: 'file-loader'
        }]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
};
