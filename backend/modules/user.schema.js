var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    email: String,
})

module.exports = mongoose.model('User', UserSchema)