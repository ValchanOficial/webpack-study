const path = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production' 

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname,'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
}