import express,{Application,Request,Response,NextFunction} from 'express';
let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('hello')
});

app.listen(5000,()=>console.log('Server running'));
