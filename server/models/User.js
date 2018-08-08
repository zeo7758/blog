const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userName: String,
    password: String,
    userId: Number,
    role: String
})

module.export = {user}
