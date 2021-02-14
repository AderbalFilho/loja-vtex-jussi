const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@components': path.resolve(__dirname, './src/components'),
    '@constants': path.resolve(__dirname, './src/constants'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@ui': path.resolve(__dirname, './src/components/ui'),
  })
);
