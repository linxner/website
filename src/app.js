const express=require('express');
const app=express();
const bodyParser=require('body-parser')
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/',function (req,res) { 
    res.send('node启动成功')
 })
app.post('/register',urlencodedParser,function (req,res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
    console.log('Username: ' + req.body.userName);
    console.log('Password: ' + req.body.passWord);
})
app.listen(8808,function (param) { 
    console.log('node成功监听在8808端口')
 })