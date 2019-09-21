const express = require("express");
//middleware
function requestComming(req, res, next) {
    if(!req.params['product'].indexOf('mecca') > 0)
    {
        res.send('error');
    }
    console.log('request is comming');
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