const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'pack.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  
  // Production mode optimizes code, as requested in task description
  mode: 'production',
  
  // CSS Loader note: .css has to be accessed from .js files to be discovered by webpack
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  
  // Generating html file that links to the pack (and putting it into the dist folder to keep everything together)
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Calculator',
      template: './index.html'
    }),
  ],
  
  // Webpack provides a server for development
  devServer: {
    static: {
      directory: path.join(__dirname), // Point this to index.html
    },
    compress: true,
    port: 8080,
    open: true
  }
};
