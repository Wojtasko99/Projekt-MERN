const router = require("express").Router()
const Form = require("../models/form")
router.post('/', async (req, res) => {
    try {
        await new Form({ ...req.body}).save()
        res.status(201).send({ message: "Dodano dane" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

module.exports = router