const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    tytul: { type: String, required: true },
    rezyser: { type: String, required: true },
    ocena: {type: String, required: true},
})
const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie
