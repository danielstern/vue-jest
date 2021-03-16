const { resolve } = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {

    mode: "development",
    entry:"./src/index.js",
    output: {

        filename: 'main.js',
        path: resolve(__dirname, "bin")

    },
    resolve: {

        extensions: ['.js', '.vue'],

    },
    plugins:[

        new VueLoaderPlugin()

    ],
    module: {

        rules: [

            { 

                test: /\.vue$/,
                loader:['vue-loader'],
                exclude: /(node_modules)/,

            },
            {

                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {

                    loader: 'babel-loader',
                    options: {
                        presets: [

                            '@babel/preset-env',

                        ],
                        "plugins":[

                            "@babel/transform-runtime"

                        ],
                    }
                    
                }

            },
            
        ]
    },
    devServer: {

        port: 9000,
        contentBase: ['./bin', './public'],
        inline: true,
        hot: true

    }
};