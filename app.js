const express = require("express");
//middleware 1123123213123123
function requestComming(req, res, next) {

    console.log('master'+'dev');
    next();
}

const app = express();
app.get('/mecca/:product', requestComming, function(req, res){
    res.send(`mecca ${req.params['product']}`);
});

app.get('/carsales', function(req, res){
    res.send("carsales")
});

app.listen(5777,()=>{
    console.log('server is running on 5777....');
});