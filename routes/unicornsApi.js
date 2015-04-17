/**
 * Created by Alexandre on 17/04/2015.
 */
var express = require('express');
var router = express.Router();
var service = require('../models/unicornsService');

function renderJson(res, err, data) {
    if (err) {
        res.status(500).json(err);
    } else {
        res.json(data);
    }
}
router.get("/", function(req, res) {
    service.getAllUnicorns(function(err, unicorns) {
        renderJson(res, err, unicorns);
    });
});

router.get("/:id", function(req, res) {
   service.findById(req.params.id, function(err, u) {
       renderJson(res, err, u);
   })
});

router.post("/", function(req, res) {
   var data = req.body;
    console.log("Got data", data);
    service.saveUnicorn(data, function(err, u) {
        renderJson(res, err, u);
    })
});
router.put("/:id", function(req, res) {
    var id = req.params.id;
    var data = req.body;
    console.log("Update", id, data);
    service.updateUnicorn(id, data, function(err, u) {
        renderJson(res, err, u);
    })
});

router.delete("/:id", function(req, res) {
    var id = req.params.id;
    service.deleteUnicorn(id, function(err) {
        renderJson(res, err, {});
    })
});

module.exports = router;