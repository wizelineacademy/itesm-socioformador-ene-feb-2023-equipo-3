const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ...other configuration options
  
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
};
  