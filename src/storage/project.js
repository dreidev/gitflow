var Waterline = require('waterline');

var projectCollection = Waterline.Collection.extend({
    identity: 'project',
    connection: 'default',
    attributes: {
        repoUrl: 'string',
        origin: 'string',

         // Add a reference to Projects
        entries: {
            collection: 'entry',
            via: 'tracking'
        },

        // Add a reference to User
        owner: {
            model: 'user'
        }
    }
});

module.exports = projectCollection;
