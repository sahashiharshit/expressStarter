const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'harshit',
    database:'shop',
    password:'19962024'
});
module.exports=pool.promise();