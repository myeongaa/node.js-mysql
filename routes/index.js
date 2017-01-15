var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    user:'root',
    password: '',
    database: 'c9'
});
/* GET home page. */
router.get('/', function(req, res, next) {
    pool.getConnection(function(error,con){
        con.query('select * from students',function(error,result){
        res.render('index',{data:result});  
        con.release();
        });
    });
  
});

module.exports = router;
