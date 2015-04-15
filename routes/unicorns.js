var express = require('express');
var router = express.Router();
var dateformat = require('dateformat');

var UnicornService = require('../models/unicornsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  UnicornService.getAllUnicorns(function(err, unicorns) {
  console.log(unicorns);
    res.render('index', { unicorns: unicorns, dateFormat: dateformat });
  });

});

router.get('/create', function(req, res) {
  res.render('create');
});

function handleUpdate(err, res, req, edit) {
  if (err) {
    console.log(err);
    if (err.code == 11000) {
      err.errors = {
        name: "Duplicate name"
      }
    }
    res.render('create', {errors: err.errors, unicorn: req.body, edit: edit});
  } else {
    res.redirect("/unicorns");
  }
}
router.post('/create', function(req, res) {
  req.body.loves = req.body.lovesString.split(',');
  UnicornService.saveUnicorn(req.body, function(err, u) {
    handleUpdate(err, res, req, false);
  });
});

router.get('/edit/:id', function(req, res) {
  var id = req.params.id;
  UnicornService.findById(id, function(err, unicorn) {
    var u = {
      name: unicorn.name,
      birth : dateformat(unicorn.birth, 'yyyy-mm-dd'),
      weight: unicorn.weight,
      gender: unicorn.gender,
      loves: unicorn.loves,
      vampires: unicorn.vampires
    };
    res.render('create', {unicorn: u, edit: true});
  })
});

router.post('/edit/:id', function(req, res) {
  var id = req.params.id;
  req.body.loves = req.body.lovesString.split(',');
  UnicornService.updateUnicorn(id, req.body, function(err) {
    handleUpdate(err, res, req, true);
  })
});

router.post('/delete/:id', function(req, res) {
  var id = req.params.id;
  UnicornService.deleteUnicorn(id, function(err, u) {
    res.redirect("/unicorns");
  })
})

module.exports = router;
