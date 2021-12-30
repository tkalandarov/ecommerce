const { Schema, model } = require("mongoose");

const schema = new Schema({
    Title: { type: String },
    Price: { type: double },
    Description: {type: String},
    ImageSource: {type: String},
})

module.exports = model("Product", schema);