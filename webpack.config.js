const path = require('path');
module.exports = {
    // other configurations...

    module: {
        rules: [
            // other rules...
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'], // Correct loader for SVG files
                include: path.resolve(__dirname, 'src/images'),
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/, // Ensure other image types are handled
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
                include: path.resolve(__dirname, 'src/images'),
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'], // Correct order and extension inclusion
    },
};
