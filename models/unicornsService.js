/**
 * Created by Alexandre on 13/04/2015.
 */

var Unicorn = require('./unicorns');

module.exports = {
    getAllUnicorns : function(cb) {
        Unicorn.find({}).sort({name: 1}).exec(cb)
    },
    saveUnicorn: function(data, cb) {
        var u = new Unicorn(data);
        u.save(function(err) {
           if (err) {
               cb(err);
           } else {
               cb(undefined, u);
           }
        });
    },
    findById: function(id, cb) {
        Unicorn.findById(id, cb);
    },
    updateUnicorn: function(id, data, cb) {
        Unicorn.findById(id, function(err, unicorn) {
            if (err) {
                cb(err);
            } else {
                unicorn.set(data);
                unicorn.save(function(err) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(undefined, unicorn);
                    }
                });
            }
        });
    },
    deleteUnicorn: function(id, cb) {
        Unicorn.remove({_id: id}, cb);
    }
};