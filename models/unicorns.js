/**
 * Created by Alexandre on 13/04/2015.
 */

var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    birth: {type: Date, required: true},
    weight: {type: Number, min: 0, required: true},
    gender: {type: String, enum: ['m', 'f'], required: true},
    loves: [String],
    vampires: {type: Number, min: 0}
});

var Unicorn = mongoose.model('Unicorn', schema);
module.exports = Unicorn;