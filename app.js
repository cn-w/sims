const express = require('express')
const template = require('art-template')
const cookieParser = require('cookie-parser')

// 处理post请求数据
const bodyParser = require('body-parser')

// 引入路由管理
var router = require('./router/main')

// 创建服务器
const app = express()

// 配置中间件bodyParser,通过req.body获取请求数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

// express-art-template依赖art-template，所以需要安装art-template
//配置模板引擎，第一个参数表示在使用模板引擎的文件
// express提供一个render函数用来渲染模板
// res.render('文件'，{模板参数})
app.engine('html', require('express-art-template'))

// 配置公开静态资源
app.use('/public/', express.static('./public'))
app.use('/node_modules/', express.static('./node_modules'))
// app.use('/index/', express.static('./index.js'))
// 配置加载路由
app.use(router)

app.listen(3000, function () {
  console.log('Running...');
})