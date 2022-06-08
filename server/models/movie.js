const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    tytul: { type: String, required: false },
    rezyser: { type: String, required: false },
    ocena: {type: String, required: false},
})
const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie
