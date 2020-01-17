// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js'
//   }  
//   // mode: 'production'
// };

// // webpack v4
const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
  // target: 'node' // update from 23.12.2018
  // externals: [nodeExternals()]
 } // update from 23.12.2018


