const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: [{ type: Types.ObjectId, ref: "Product" }]
})

module.exports = model("User", schema);