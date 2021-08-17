const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin'); 
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    
    mode: 'development',
    output:{
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /styles.css$/,
                use:[MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
        ]
    },
    entry: {
        index: "./app/index.js",
        login: "./app/login.js",
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'antd'
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            title: 'Webpack app',
            favicon: './src/img/icon-web.png'
        }),
        new MiniCssExtract({
            filename: 'styles.css',
            ignoreOrder:false,
        }),
        new CopyPlugin({
            patterns:[
                {from:'src/assets/', to:'assets/'}
            ]
            
        }),
    ]
    
}