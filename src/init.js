const fs = require('fs');
const path = require('path');
const resolve = require('resolve');
var NodeGit = require("nodegit");


module.exports = function(args, callback) {
        this.log('init');
        process.env.PWD = process.env.PWD || process.cwd();
        process.env.CLI_ROOT = process.env.CLI_ROOT || path.resolve(__dirname, '..');

        var pathToRepo = process.env.PWD
      
        NodeGit.Repository.openExt(pathToRepo,0,'null').then(function (repository) {
         console.log('Is a repo');
         console.log(repository);

         var signature = repository.defaultSignature();
         console.log(signature);


        }, function (reasonForFailure) {
         console.log('  Is not a repo'+reasonForFailure);
                // NodeGit.Repository.init(pathToRepo, 0).then(function (repo) {
                //         // git commit --allow-empty -m "Initial commit"
                //         repository.createCommit(updateRef, author, committer, message, Tree, parents).then(function(oid) {
                //         // Use oid
                //         });
                // });
        });

     




        // this.log(process.env.PWD);
        // this.log(process.env.CLI_ROOT);
        callback();
};