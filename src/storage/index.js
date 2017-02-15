var Waterline = require('waterline');
var sailsDiskAdapter = require('sails-disk');
var waterline = new Waterline();
var homedir = require('homedir');

sailsDiskAdapter.defaults.filePath = homedir()+'/.flow/data/projects.';
waterline.loadCollection(require('./user'));
waterline.loadCollection(require('./project'));
waterline.loadCollection(require('./entry'));


var config = {
    adapters: {
        'disk': sailsDiskAdapter
    },

    connections: {
        default: {
            adapter: 'disk'
        }
    }
};

module.exports = new Promise(function(resolve, reject) {  
        waterline.initialize(config, function (err, db) {
            if (err) {
                reject(err);
            };
                resolve(db);
            })
});
