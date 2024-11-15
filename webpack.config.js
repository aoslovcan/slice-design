const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/assets/js/index.js', // Entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Cleans the dist folder before each build
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Image files
                type: 'asset/resource',
            },

            {
                test: /\.js$/, // JavaScript files
                exclude: /node_modules/, // Exclude dependencies
                use: {
                    loader: 'babel-loader', // Use Babel
                    options: {
                        presets: ['@babel/preset-env'], // Use the preset for modern JavaScript
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Base HTML file
        }),
    ],
    devServer: {
        static: './dist',
        port: 8080, // Port for the dev server
        open: true, // Opens the browser automatically
    },
    mode: 'development', // Default mode
};
