var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 
// module.exports = {
//   entry: './app.js',

//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'postcss-loader']
//         })
//       },
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: [
//             {loader: 'css-loader', options: {sourceMap: true} },
//             {loader: 'postcss-loader', options: {sourceMap: true} },
//             {loader: 'sass-loader', options: {sourceMap: true} }
//           ]
//         })
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       }
//     ]
//   },
//   plugins: [
//     new BrowserSyncPlugin(
//       // BrowserSync options
//       {
//         // browse to http://localhost:3000/ during development
//         host: 'localhost',
//         port: 3000,
//         // proxy the Webpack Dev Server endpoint
//         // (which should be serving on http://localhost:3100/)
//         // through BrowserSync
//         proxy: 'http://localhost:8080/'
//       },
//       // plugin options
//       {
//         // prevent BrowserSync from reloading the page
//         // and let Webpack Dev Server take care of this
//         reload: false
//       }
//     )
//   ]
// };

const path = require('path');

module.exports = {
  entry: { 
    main: './public/js/visionboard.js',
    calendar: './public/js/calendar.js'
    
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  devServer: {
    historyApiFallback: true,
    publicPath: '/'
  },

  // entry: './app.js',
  // output: {
  //   filename: './dist/build.js'
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  watch: true,
  devtool: false,
  // ...
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      // files: ['./dist/*.html'],
      server: { baseDir: ['dist'] }
    })
  ]
}