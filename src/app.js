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
    var postValues = JSON.parse(req.body.data)
    if (!postValues) {
        return res.sendStatus(400);
    } else {
        console.log(postValues)
        var email = postValues.email
        var password = postValues.password;
        var nickname = postValues.nickname;
        var residence = postValues.residence;
        var phone = postValues.phone;
        var agreement = postValues.agreement;
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
app.listen(8808, function (param) {
    console.log('node成功监听在8808端口')
})