const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: {import: './index.jsx', dependOn: 'vendor'},
        vendor: ['react', 'react-dom']
    },
    optimization: {
        splitChunks: {chunks: 'async'}
    },
    output: {
        filename: '[name].app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.md$/i,
                type: 'asset/source'
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx']
    }
};

