var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/profile/:name', function(req,res) {
  var data = {age:27,job:'nurse',hobbies:['eating','sleeping','walking']};
  res.render('profile', 
  {
   person: req.params.name,
   data: data, 
  });
 });

app.get('/profile',function(req,res) {
  res.render('profile');
});
app.listen(3000);
