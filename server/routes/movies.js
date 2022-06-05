const router = require("express").Router()
const db = require("../db");
const Movie = require("../models/movie")
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const Json2csvParser = require("json2csv").Parser;

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

router.get('/showMovies', async (req, res) => {
    // await Movie.find({},{_id: 0}).lean().exec((err, data) => {
    //     if (err) throw err;
    //     const csvFields = ['tytul', 'rezyser', 'ocena']
    //     const json2csvParser = new Json2csvParser({
    //         csvFields
    //     });
    //     const csvData = json2csvParser.parse(data);
    //     fs.writeFile("../client/src/movies.csv", csvData, function(error) {
    //         if (error) throw error;
    //         console.log("Write to movies.csv successfully!");
    //     });
    //     res.send('File downloaded Successfully')
    // });
    const data = await Movie.find({},{_id: 0})
    res.status(201).send({data})
});

module.exports = router