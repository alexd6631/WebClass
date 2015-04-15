/**
 * Created by Alexandre on 13/04/2015.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unicorns');
mongoose.connection.once('open', function() {
    console.log("Connected to Mongo !")
});