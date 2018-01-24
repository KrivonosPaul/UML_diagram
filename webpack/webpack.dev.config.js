var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../src/public/');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        loaders: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
