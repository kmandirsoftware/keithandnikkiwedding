var express=require('express');
var app=express();
var dateFormat = require('dateformat');
var now = new Date();
var date=dateFormat(now, "yyyymmdd");
console.log(date);
var rsvp = require("./rsvp.js");

// return APIs
function process_data(err, data,res){
   //console.log(data);
   res.end(JSON.stringify(data));
}

app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/JS'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
res.render('index.html');
});
app.get('/updateinfo',function(req,res){
   rsvp.insert(req.first,req,last,req,accept,req.mealchoice,req.email,res,process_data);
});
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
//var server=app.listen(3000,function(){
//console.log("We have started our server on port 3000");
//});

