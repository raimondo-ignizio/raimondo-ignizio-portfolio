const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = (env, argv) => {
  const entryPath = argv.mode === "development" ? "./src/js/index_dev.js" : "./src/js/index.js"
  return {
      entry: {
        main: path.resolve(__dirname, entryPath),
      },
      output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ],
      },
      stats: {
        children: true
      },
      devServer: {
        contentBase: "./build",
        open: true
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: "My Portfolio",
          template: path.resolve(__dirname, "./src/portfolio.html"),
        }),
      ]
    };
}
