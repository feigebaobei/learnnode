const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index', {title: 'index page', msg: 'welcome'})
})
app.listen(3800, () => console.log('success get up'))