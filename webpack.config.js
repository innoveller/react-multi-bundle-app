const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

let entryMap = {
  app_banner: "./src/app_banner.tsx",
  app_proxy: "./src/app_proxy.tsx"
};

/** Create separate html files that contains a correspoding js bundle */
let htmlPlugins = [];
for(key in entryMap) {    
    htmlPlugins.push(
        new HTMLWebpackPlugin({
            filename: key + '.html',
            template: "app-container-template.html",
            chunks: [key] // without chunk, all js bundles will be added to each html file
        })
    )
}

module.exports = {
  entry: entryMap,
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve("dist"),
    publicPath: "/",
    clean: true // delete the previous items in the dist folder 
  },
  devtool: 'inline-source-map',
  devServer: {    
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 4200, // you can change to any port
    proxy: {
      '/api': 'http://localhost:9000'          
    },
    // Enable hot reloading
    hot: true
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ], 
  }, 
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }, 
  plugins: [...htmlPlugins]
}