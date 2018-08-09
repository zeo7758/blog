const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userName: String,
    password: String,
    userId: Number,
    role: String
})

module.exports = mongoose.model('user', user)
// var mongoose = require('mongoose');
//
// var userSchema = new mongoose.Schema({
//   "userId":String,
//   "userName":String,
//   "userPwd":String,
//   "orderList":Array,
//   "cartList":[
//     {
//       "productId":String,
//       "productName":String,
//       "salePrice":String,
//       "productImage":String,
//       "checked":String,
//       "productNum":String
//     }
//   ],
//   "addressList":[
//     {
//       "addressId": String,
//       "userName": String,
//       "streetName": String,
//       "postCode": Number,
//       "tel": Number,
//       "isDefault": Boolean
//     }
//   ]
// });
//
// module.exports = mongoose.model("User",userSchema);
