/**
 * Created by Alexandre on 13/04/2015.
 */

require('./connection');
var Unicorn = require("./models/unicorns");


var test = new Unicorn({
    name: "Skippy",
});

test.validate(function(err) {
    console.log(err);
});