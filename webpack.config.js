const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV ==='test') {
  require('dotenv').config( {path:'.env.test'} );
} else if(process.env.NODE_ENV ==='development') {
  require('dotenv').config({ path:'.env.development'});
}

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });
  return {
    mode: "none",
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.join(__dirname, "public/dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node.modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              // options: {
              //   sourceMaps: isProduction ? 'source-map' : 'inline-source-map',
              // },
            },
            {
              loader: "sass-loader",
              // options: {
              //   sourceMaps: isProduction ? 'source-map' : 'inline-source-map',
              // },
            },
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          include: /images/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images/",
                publicPath: "images/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID
        ),
        "process.env.FIREBASE_APP_ID": JSON.stringify(
          process.env.FIREBASE_APP_ID
        ),
        "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(
          process.env.FIREBASE_MEASUREMENT_ID
        ),
      }),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      compress: true,
      port: 8080,
      historyApiFallback: true
      // liveReload: true,
    },
  };
};

