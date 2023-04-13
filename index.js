const express = require('express');
const app = express();
const db = require('./mysql/sql');

app.use(express.json());

app.use(express.urlencoded());


app.use('/',require('./routes/'))




app.listen(process.env.PORT || 8000, function(err){
    if(err){
        console.log('error:',err);
    }
   console.log('server is running on :');
});

module.exports = app;