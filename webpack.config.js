const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  // สังเกตนะครับ ตอนนี้เราใช้ array แทน './ui/theme/elements.scss'
  // เพราะต้องการให้ entry ของเรามาจากไฟล์มากกว่า 1 ตัว
  entry: [
    './ui/theme/elements.scss',
    './ui/index.js'
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // ใช้ Regular Expression ทดสอบ ถ้าไฟล์ไหนลงท้ายด้วย js หรือ jsx
        // ให้ใช้ babel-loader
        test: /\.(js|jsx)$/,

        // ไม่รวม node_modules เนื่องจากเป็นของที่คนอื่นเขียน
        // เราไม่ต้องใส่ใจ
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        // สำหรับไฟล์นามสกุล css ให้ใช้ Loader สองตัวคือ css-loader และ style-loader
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        // ใช้ Loader สามตัวสำหรับ scss
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:5000'
      }
    }
  }
};