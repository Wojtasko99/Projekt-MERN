const router = require("express").Router()
const Movie = require("../models/movie")

router.post('/', async (req, res) => {
    try {
        await new Movie({ ...req.body}).save()
        res.status(201).send({ message: "Dodano dane" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});
router.post('/update', async (req, res) => {
    try{
    const filter = { tytul: req.body.tytul }
    const update = { rezyser: req.body.rezyser, ocena: req.body.ocena }
    let doc = await Movie.findOneAndUpdate(filter,update, {
        new: true
    });
    res.status(201).send({ message: "Updated" })
}
    catch(error){
        res.status(500).send({ message: "Internal Server Error" })
    }

});
router.post('/delete', async (req, res) => {
    try{
        const filter = { tytul: req.body.tytul }
        let doc = await Movie.deleteOne(filter)
        res.status(201).send({ message: "Deleted" })
}
    catch(error){
        res.status(500).send({ message: "Internal Server Error" })
    }

});

router.route('/fetchMovies').get((req, res) => {

    Movie.find().sort({ocena: -1}).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router