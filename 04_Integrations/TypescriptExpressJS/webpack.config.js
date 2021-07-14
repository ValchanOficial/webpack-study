const path = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production' 

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname,'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}