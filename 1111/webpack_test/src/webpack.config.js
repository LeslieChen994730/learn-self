const path = require('path') // 首先要引入node.js中path 模块，用于处理文件与目录的路径

// const 命令声明一个只读的常量，一旦声明，值不可以改变，改变会报错；只声明不赋值也会报错
// 常量存储的是一个不可以变化的变量。
//
module.exports = {
  entry: './src/index.js', // 指定入口文件
  output: {
    path: path.resolve(__dirname, 'dist/js/'), // 指定出口文件的路径目录
    filename: 'bulid.js', // 制定出口文件的名称
  },
  module: {
    rules: [
      // 在webpack2中，loaders 被替换成了 rules 其实就是loader的规则
      //  实现 css 打包
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      //   // test 说明了当前 loader 能处理那些类型的文件
      //   // use 则指定了 loader 的类型。
      //   // 注意：数组中的loader不能省略扩展名
      // },
      {
        test: /\.scss$/,
        // 注意 是sass-loader ，不是 scss-loader
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
}
