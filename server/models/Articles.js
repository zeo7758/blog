const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const article = new Schema({
    userId: Number,
    articleName: String,
    articleId: Number,
    content: String,
    md: String,
    type: Number,
    comment: String,
    time: Number,
})

module.exports = mongoose.model('article', article);
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const user = new Schema({
//     userName: String,
//     password: String,
//     userId: Number,
//     role: String
// })
//
// module.exports = mongoose.model('user', user)
