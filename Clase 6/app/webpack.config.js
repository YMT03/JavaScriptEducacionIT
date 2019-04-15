const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode : "development",
    plugins:[new HtmlWebpackPlugin({
        template:"./src/index.html" //Para que no genere un html totalmente nuevo
    })]
}