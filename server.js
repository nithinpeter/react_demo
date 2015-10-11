var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"))

app.get('/',function(req,res) {
    res.sendFile(path.resolve('index.html'));
})

app.listen(process.env.PORT || 9000).listen(3000);
