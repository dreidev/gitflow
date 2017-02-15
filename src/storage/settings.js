var Waterline = require('waterline');

var settingCollection = Waterline.Collection.extend({
    identity: 'setting',
    connection: 'default',
    attributes: {
        name: 'string',
        value: 'string',

        // Add a reference to User
        owner: {
            model: 'user'
        }
    }
});


module.exports = userCollection;