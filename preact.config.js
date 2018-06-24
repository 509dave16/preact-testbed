import CompressionPlugin from "compression-webpack-plugin";

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function(config, env, helpers) {
  if (env.isProd) {
    const insertionPointPlugin = helpers
      .getPluginsByName(config, "DefinePlugin")
      .pop();
    config.plugins.splice(
      insertionPointPlugin.index + 1,
      0,
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );
  }
}
