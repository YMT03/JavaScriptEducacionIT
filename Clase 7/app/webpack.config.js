const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    //development o production
    mode : "development",
    devtool: "source-map", //Para no tener los eval en el main.js y asi debugearlo en el devtools de Chrome mas facilmente con lineas de codigo reales
    devServer: {
        open: true // Se abre el navegador en localhost automaticamente al ejecutar npm run dev
    },
    module:{ 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader" //BABEL
            },
            {
                test:/\.css$/,
                //use:["style-loader","css-loader"]
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html", //Esto para que no me pise el index.html
        minify: {
            removeComments:true,
            removeAttributeQuotes: true
        }
    }), new MiniCssExtractPlugin({
        filename:'[name].css'
    })]
}