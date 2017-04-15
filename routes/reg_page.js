var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var cors = require('cors'); //required for cross origin request
router.use(cors()   );
router.use(function(req, res, next) {

    next();
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/', function (req, res) {
    console.log("Client request");
    console.log(req.body);
    var registration = req.body;


    //db.dmlQry('insert into registration set ?',registration, function(error,result){
    //    if(error){
    //        console.log("Error" + error);
    //        res.writeHead(500, {'Content-Type': "application/json"});
    //        res.end(JSON.stringify({response:error}));
    //    }
    //    else{
    //        res.writeHead(200, {'Content-Type': "application/json"});
    //        res.end(JSON.stringify({response:'Saved to MySQL'}));
    //    }
    //});
})

module.exports = router;

