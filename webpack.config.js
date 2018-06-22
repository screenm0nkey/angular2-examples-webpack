const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");

const excluded = [/node_modules/, /ms-components/, /backup-files/];

// Webpack Config
const webpackConfig = {
  entry: {
    main: "./src/main.browser.ts"
  },

  output: {
    publicPath: "",
    path: path.resolve(__dirname, "./dist")
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.join(__dirname, './src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    )
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          "awesome-typescript-loader",
          "angular2-template-loader",
          "angular-router-loader"
        ],
        exclude: excluded
      },
      {
        test: /\.css$/,
        loaders: ["to-string-loader", "css-loader"],
        exclude: excluded
      },
      { test: /\.html$/, loader: "raw-loader", exclude: excluded },
      { test: /\.json$/, loader: "json-loader", exclude: excluded },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?context=src/images&name=images/[path][name].[ext]",
          {
            loader: "image-webpack-loader",
            query: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: "75-90",
                speed: 3
              }
            }
          }
        ],
        exclude: excluded
      }
    ]
  }
};

// Our Webpack Defaults
const defaultConfig = {
  devtool: "source-map",

  output: {
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].map",
    chunkFilename: "[id].chunk.js"
  },

  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: [path.resolve(__dirname, "node_modules")]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  },

  node: {
    global: true,
    crypto: "empty",
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};

module.exports = webpackMerge(defaultConfig, webpackConfig);
