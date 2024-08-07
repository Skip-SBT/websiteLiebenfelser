const path = require('path');
module.exports = {
    // other configurations...

    module: {
        rules: [
            // other rules...
            {
                test: /\.svg$/,
                use: ['@svg/webpack'],
                include: path.resolve(__dirname, 'src/images'),
            },
        ],
    },
    resolve: {
        extensions: ['gatsby-plugin-react-svg', '.js', '.jsx', '.ts', '.tsx', '.svg'], // include svg in extensions
    },
    options: {
        rule: {
            include: /svg/
        }
    }
};
