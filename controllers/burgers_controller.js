// dependencies & module imports
const express = require('express');
const burger = require('../models/burger');
const router = express.Router();
//create router for app 

// function to get all burger data at '/'
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        const burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        res.render('index', burgersObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result){
        res.json({ id: result.insertId});
    });
});

router.put('/api/burgers/:id', function(req, res) {
    const condition = `id = ${req.params.id}`;

    console.log("condition of put function", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.chagedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;