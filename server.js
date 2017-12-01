var express=require('express');
var path=require('path');
var bodyparser=require('body-parser');


var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();

//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

// static folder
app.use(express.static(path.join(__dirname,'client')));

//body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api',tasks);


app.listen(3000,function () {
  console.log("Server started...");
})
