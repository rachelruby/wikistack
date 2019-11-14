 
const router = require('express').Router();
const {addPage} = require("../views");

router.get('/', (req, res, next) => {
    res.send('This is the wiki router');
})

router.post('/', (req, res, next) => {
    res.send('This is the post wiki router');
})

router.get('/add', (req, res, next) => {
    res.send(addPage());
})

module.exports = router;