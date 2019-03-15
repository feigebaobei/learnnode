var path = require('path'),
  routes = require('./routes'),
  exphbs = require('express-handlebars'),
  express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  moment = require('moment'),
  multer = require('multer')

module.exports = function (app) {
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({'extended': true}))
  app.use(bodyParser.json())
  // app.use(multer({dest: path.join(__dirname, 'public/upload/')}))
  // app.use(multer({dest: path.join(__dirname, '../public/upload/')}).single('png')) // 可以正常运行
  app.use(multer({dest: path.join(__dirname, 'public/upload/')}).any())
  // app.use(multer())
  app.use(methodOverride())
  app.use(cookieParser('some-secret-value-here'))
  routes(app)
  app.use('/public/', express.static(path.join(__dirname, '../public')))
  if ('development' === app.get('env')) {
    app.use(errorHandler())
  }
  app.engine('handlebars', exphbs.create({ // 使后缀名是handlebars的文件使用 callback 做为模板引擎。
    defaultLayout: 'main',
    layoutDir: app.get('views') + '/layouts',
    partialsDir: [app.get('views') + '/partials'],
    helpers: {
      timeago: (timestamp) => {
        // 这里会报timestamp 的格式不对。
        // 所以使用返回字符串
        return '几分钟以前'
        // return moment(timestamp).startOf('minute').fromNow()
      }
    }
  }).engine)
  app.set('view engine', 'handlebars')
  return app
}