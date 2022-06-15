const mongoose = require("mongoose");
const uuid = require("uuid");

const WalletUsersSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuid.v1,
        unique: true,
      },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    nationalid:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    meansofnationalidentity:{
        type: Array,
        required: true
    },
    wrongpinattempts:{
        type: String
    },
    status:{
        type: String,
        required: true
    },
    authUserId:{
        type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    deleted: {
        type: Boolean
    }
})

module.exports = mongoose.model("WalletUsers",WalletUsersSchema);