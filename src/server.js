import express from 'express';
import bodyParser from 'body-parser'
import viewEngine from '../src/config/viewEngine'
import initWebRoutes from '../src/route/web'
require('dotenv').config()

var port = process.env.PORT || 8888
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app)
initWebRoutes(app)

app.listen(port, function(){
    console.log(`please click http://localhost:${port}`)
})