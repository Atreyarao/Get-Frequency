const axios = require("axios");
const express = require("express");
const router = express.Router();


function genrateN(dataArray, n) {
    var map = {};

    dataArray.map(d => {
        if (map.hasOwnProperty(d)) {
            map[d]++;
        } else {
            map[d] = 1;
        }
    })
    var finArray = [];
    finArray = Object.keys(map).map(d => {
        return {
            name: d,
            freq: map[d]
        };
    });
    finArray.sort((a, b) => {
        return b.freq - a.freq;
    })
    var result = [];
    if (n > finArray.length || n < 0) {
        result.push({
            name: 'exceeded',
            freq: 0
        })
        return result;
    }
    for (var i = 0; i < n; i++) {
        result.push(finArray[i]);
    }
    return result;


}

router.post("/getData", (req, res) => {
    var n = req.body.num;
    //console.log(req.body);
    let data = "";
    axios.get("http://terriblytinytales.com/test.txt").then(response => {
        //console.log(response.data);
        data = response.data;
        var dataArray = data.split(/\s+/);
        var resultArray = genrateN(dataArray, n);
        JSON.stringify(resultArray);
        res.status(200).json(resultArray);
    })
})

module.exports = router;