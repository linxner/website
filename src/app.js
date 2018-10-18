const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const router = express.Router();
const User = require('./database/model');

mongoose.connect('mongodb://localhost/website', {
    useNewUrlParser: true
}, function (param) {
    console.log('mongodb connected')
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/', function (req, res) {
    res.send('node启动成功')
})
app.post('/register', function (req, res) {
    var postRegisterValues = JSON.parse(req.body.data)
    if (!postRegisterValues) {
        return res.sendStatus(400);
    } else {
        console.log(postRegisterValues)
        var email = postRegisterValues.email
        var password = postRegisterValues.password;
        var nickname = postRegisterValues.nickname;
        var residence = postRegisterValues.residence;
        var phone = postRegisterValues.phone;
        var agreement = postRegisterValues.agreement;
        var date = (new Date()).getTime();
        var user = new User({
            email: email,
            password: password,
            nickname: nickname,
            residence: residence,
            phone: phone,
            agreement: agreement,
            date: date
        }, false)
        user.save(function (err, product) {
            if (err) {
                console.log(err)
            } else {
                User.find({
                    nickname: '1'
                }, function (err, res) {
                    console.log(res)
                    console.log('success')
                })
            }
        })
        return res.sendStatus(200)
    }
})
app.post('/login', function (req, res) {
    var postLoginValue = JSON.parse(req.body.data)
    User.find({
        nickname: postLoginValue.userName
    }, function (err,user) {
        console.log(typeof(user))
        console.log(user.length)
        if(err){
            console.log(err)
            res.sendStatus(400)
        }
        if(user.length>0){
            res.send('登陆成功')
        }else{
            res.send('登陆失败')
        }
    })
})
app.listen(8808, function (param) {
    console.log('node成功监听在8808端口')
})