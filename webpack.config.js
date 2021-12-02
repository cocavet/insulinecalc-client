const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const PATH_VIEWS = './src/client/';
const PATH_ASSETS = './public/assets/';

module.exports = {
    entry: {
        bundle: `${ PATH_VIEWS }render/index.ts`,
    },

    output: {
        path: path.resolve(__dirname, PATH_ASSETS),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader!tslint-loader'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'vue-style-loader'
                    }, {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};