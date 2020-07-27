const express = require('express');
const router = express.Router();


const chartData = require('../data/chartData.json');
const chartFunction = require('../server/d3/barChart');

// GET chart page
router.get('/', (req, res) =>{
    res.render('chart', {
        title:"D3 Chart",
        chartData: chartData,
        chartFunction: chartFunction
    });
})

module.exports = router;
