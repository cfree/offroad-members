const webpack = require('webpack');

module.exports = {
  plugins: [
    // force unused dialects to resolve to the only one we use
    // and for whom we have the dependencies installed
    // new webpack.ContextReplacementPlugin(
    //   /knex\/lib\/dialects/,
    //   /mysql\/index.js/,
    // ),
    // pg optionally tries to require pg-native
    // replace it by a noop (real module from npm)
    //new webpack.NormalModuleReplacementPlugin(/pg-native/, 'noop2'),
  ],
};
