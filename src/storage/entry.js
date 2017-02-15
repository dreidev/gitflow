var Waterline = require('waterline');

var entryCollection = Waterline.Collection.extend({
    identity: 'entry',
    connection: 'default',
    attributes: {
        timestamp: 'string',
        type: 'string',
        
        // Add a reference to Project
        tracking: {
            model: 'project'
        }
       
    }
});


module.exports = entryCollection;