const  mongoose = require('mongoose');
const Schema = mongoose.schema;
const article = new Schema({
    userId: Number,
    articleName: String,
    articleId: Number,
    content: String,
    type: Number,
    comment: String,
})
module.export = {article};
