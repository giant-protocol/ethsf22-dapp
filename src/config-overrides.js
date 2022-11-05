const webpack = require("webpack");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  let loaders = config.resolve;
  loaders.fallback = {
    assert: require.resolve("assert/"),
    http: require.resolve("stream-http"),
    https: false,
    path: require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
    url: require.resolve("url/"),
    util: require.resolve("util/"),
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
    buffer: require.resolve("buffer/"),
  }
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];
  return config;
};
