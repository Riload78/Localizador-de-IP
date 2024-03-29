const path = require('path')
module.exports = {
    entry: [
        path.resolve(__dirname, 'src/js/index.js'),
        '@babel/polyfill', // Add polyfill here
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            // Rule for JavaScript files (use Babel-loader if needed)
            {
                test: /\.js$/, // Matches files ending with .js
                exclude: /node_modules/,
                use: 'babel-loader' // Replace with your desired loader
            },

            // Rule for SVG files (use svg-url-loader)
            {
                test: /\.svg$/, // Matches files ending with .svg
                exclude: /node_modules/,
                loader: 'svg-url-loader',
                options: {
                    // Your svg-url-loader options here
                   
                }
            }
        ]
    }
}