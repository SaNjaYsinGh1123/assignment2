var mysql   = require('mysql2');

var pool = mysql.createPool({
  host     : 'bfz9r2sggxjohljunscv-mysql.services.clever-cloud.com',
  user     : 'u0qhkodsp1vkdkwg',
  password : 'rVK6D8auc9WZSiitFRPe',
  database : 'bfz9r2sggxjohljunscv',
  waitForConnections: true
});

pool.getConnection((err, conn)=>{
    if(err){
        console.log(err)
    }
    console.log('mysql connection successfully');
})

module.exports = pool.promise();