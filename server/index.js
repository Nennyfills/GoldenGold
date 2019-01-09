const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var api = require('./routes/api')
const cors = require('cors');

app.use(cors(), bodyParser.json());

app.use('/api', api)
app.listen(3600 , ()=> {console.log("App started")})