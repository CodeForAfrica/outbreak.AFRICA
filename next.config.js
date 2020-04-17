const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCSS(
  withImages({
    webpack(config) {
      // support font & image imports inside css files
      config.module.rules.push({
        // leaflet.css loads these images which breaks default webpack
        test: /(layers|layers-2x|marker-icon)\.png$/,
        use: [
          {
            loader: require.resolve('url-loader')
          }
        ]
      });

      return config;
    }
  })
);
