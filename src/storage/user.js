var Waterline = require('waterline');

var userCollection = Waterline.Collection.extend({
    identity: 'user',
    connection: 'default',
    attributes: {
        name: 'string',
        email: 'string',

        // Add a reference to Projects
        projects: {
            collection: 'project',
            via: 'owner'
        }
    }
});


module.exports = userCollection;