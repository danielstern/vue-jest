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
    "plugins":[
        new VueLoaderPlugin()
    ],
    module: {
        // plugins: [new VueLoaderPlugin()],
        rules: [
            { 
                test: /\.vue$/,
                loader:['vue-loader'],
                
                // exclude: /(node_modules)/,
                // use: {
                //     loader: 'vue-loader',
                //     options: {
                //         "plugins":[
                //             new VueLoaderPlugin()
                //         ]
                //     }
                // }
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
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                //   {
                //     loader: ,
                //     options: {
                //       // enable CSS Modules
                //       modules: true,
                //       // customize generated class names
                //       localIdentName: '[local]_[hash:base64:8]'
                //     }
                //   }
                ]
            }
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: ['./bin', './public'],
        inline: true,
        hot: true
    },
    // serve:{
    //     port: 9000,
    //     options:{
    //         port: 9000
    //     }
    // }
    /* Whole block just doesn't work. Webpack serve is poorly documented but funcional enough. */
    // serve : {

    //     options: {

    //         content: [resolve(__dirname, "public")]

    //     }        
        
    // }
};