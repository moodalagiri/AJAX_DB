/**
 * Created by manasabharatesha on 10/20/2016.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'manasa',
    database : '280_regpage'
});

function insert(sqlQuery,data,callback)
{
    connection.query(sqlQuery, data, function(err, result) {
        if(err){
            console.log("ERROR: " + err.message);
        } else {
            //return err or result
            console.log("DB Results:"+result);
            //connection.end();
            callback(err, result);
        }
    });
    connection.end();
    console.log("\nConnection closed..");
}
exports.insert=insert;

