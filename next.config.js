const withCSS = require('@zeit/next-css');

const withImages = require('next-images');
module.exports = withCSS(
  withImages({
    webpack(config, options) {
      // config.module.rules = [
      //   {
      //     test: /\.(pdf|gif|png|jpe?g|svg)$/,
      //     use: [{
      //       loader: 'file-loader',
      //       options: {}
      //     }]
      //   }
      // ]
      return config;
    }
  })
);
