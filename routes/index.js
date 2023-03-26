
const express = require('express');
const router = express.Router();
const tesseract = require("tesseract.js")
var Jimp = require("jimp");
var request = require('request')
var fs = require('fs')
var filename = 'pic.png'

var writeFile = fs.createWriteStream(filename)

// there are other options also such as google vision api, Microsoft vision api
// but i dont have credit card 

router.post('/',function(req,res){
    
        request(req.body.url).pipe(writeFile).on('close', function() {
            Jimp.read(filename).then(function (image) {
              image
                  .color([
                    { apply: 'desaturate', params: [90] }
                  ])
                  .contrast(1)
                  .write(filename);
          })
          .then(function() {
          
            tesseract.recognize(filename,'eng',{tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ'})
            .then(function(result){
                res.send(result.data.text)
            })
          })
          .catch(function (err) {
              res.send(err);
          });
          });
});

module.exports = router;