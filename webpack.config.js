const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "build"),
   },
   plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
   ],
   devServer: {
      static: {
         directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
   },
   module: {
      rules: [
         {
            test: [/\.m?js$/, /\.jsx?$/],
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
               },
            },
         },
         {
            test: [/\.css$/],
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
      ],
   },
};
