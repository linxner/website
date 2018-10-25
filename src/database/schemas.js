const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: '',
    password: '',
    nickname: '',
    residence: '',
    phone: '',
    agreement: Boolean,
    date: ''
})
module.exports = userSchema