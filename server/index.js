var express = require('express')
const app = express();
var api = require('./routes/api')


app.use('/api', api)
app.listen(3600 , ()=> {console.log("App started")})