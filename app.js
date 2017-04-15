var express = require('express');
var bodyParser = require('body-parser'); //required for parsing post data from client
var cors = require('cors');
path = require('path');






var app = express();

var port = process.env.PORT || 8000;



app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/reg_page',require('./routes/reg_page'));

app.get('/', function(req, res){
  res.render('reg_page');
})
//stop server
app.listen(port, function(){
  console.log("Server is using gulp and is up at : "+ port);
});