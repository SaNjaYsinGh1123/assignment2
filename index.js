const express = require('express');
const app = express();
const db = require('./mysql/sql');

app.use(express.json());

app.use(express.urlencoded());


app.use('/',require('./routes'))




app.listen(process.env.PORT || 3000,()=>{
    console.log('backend running')
})

module.exports = app;