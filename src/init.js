const NodeGit = require('nodegit'),
        Signature = NodeGit.Signature,
        connect = require('./storage'),
        pathToRepo = process.cwd();


module.exports = function (args, callback) {
        let that = this;

        connect.then(function (db) {
                let User = db.collections.user;
                User.find({}).exec(function (err, user) {

                        if (user.length < 1){
                                that.log(`Please run 'setup'`)
                                callback()
                                return;
                        }                       
                           
                        let signature = Signature.now(user[0].name, user[0].email);


                        NodeGit.Repository.openExt(pathToRepo, 0, 'null').then(function (repository) {

                               

                                repository.createCommitOnHead([], signature, signature, "flow init").then(function (oid) {

                                        NodeGit.Branch.iteratorNew(repository, 3).then(function(branchIterator) {
                                                console.log(repository);
                                                console.log(branchIterator)
                                        });

                                        repository.createBranch('master', oid, false);
                                        repository.createBranch('develop', oid, false).then(function () {
                                                repository.checkoutBranch('develop');
                                        });
                                });
                                callback();

                        }, function (reasonForFailure) {

                                NodeGit.Repository.init(pathToRepo, 0).then(function (repository) {

                                repository.createCommitOnHead(['.', ], signature, signature, "flow init").then(function (oid) {
                                        repository.createBranch('master', oid, false);
                                        repository.createBranch('develop', oid, false).then(function () {
                                                repository.checkoutBranch('develop');
                                        });
                                });
                                });

                                callback();



                        });

                });


        });
};
