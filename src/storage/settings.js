var Waterline = require('waterline');

var settingCollection = Waterline.Collection.extend({
    identity: 'setting',
    connection: 'default',
    attributes: {
        name: 'string',
        value: 'string'
    }
});


module.exports = userCollection;