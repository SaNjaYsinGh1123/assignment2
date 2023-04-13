const express = require('express');
const db = require('./mysql/sql');
const app = express();

app.use(express.json());
app.use('/',require('./routes/'))




app.listen(8000, function(err){
    if(err){
        console.log('error:',err);
    }
   console.log('server is running on :');
});