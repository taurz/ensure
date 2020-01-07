const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'ensure.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'es',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js']
    }
};