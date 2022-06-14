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
router.route('/fetchForms').get((req, res) => {

    Form.find().exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
router.post('/deleteForm', async (req, res) => {
    try{
        console.log(req.body.data)
        await Form.deleteOne(req.body.data)
        res.status(201).send({ message: "Deleted" })
}
    catch(error){
        res.status(500).send({ message: "Internal Server Error" })
    }

});

module.exports = router