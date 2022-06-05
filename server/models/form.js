const mongoose = require("mongoose")
const Joi = require("joi")
const formSchema = new mongoose.Schema({
    email: { type: String, required: true },
    favMovie: { type: String, required: true },
    country: {type: String, required: true},
    types: {type: String, required: true},
    rate: {type: String, required: true},
})
const Form = mongoose.model("Form", formSchema)
module.exports = Form