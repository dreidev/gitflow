const fs = require('fs'),
    path = require('path'),
    resolve = require('resolve'),
    NodeGit = require("nodegit"),
    connect = require('./storage');

module.exports = function (args, callback) {
            

    const that = this;


      this.prompt([{
                        type: 'input',
                        name: 'name',
                        message: 'What\'s your git username?',
                        default: 'you'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What\'s your git email?',
                        default: 'you@youremail.com'
                    }],
                    function (result) {
                        
                     connect.then(function (db) {
                        let User = db.collections.user;
                        User.destroy({}).exec(function() {
                            User.create({email: result.email, name: result.name}).exec(function(err) {
                                  if (err) {
                                        that.log(`Setup unsuccessful for ${result.name}, ${result.email}`);
                                        callback();
                                    };
                                    that.log('Setup successfully!');
                                    callback();

                            });
                        });
                     });

                 });
};
