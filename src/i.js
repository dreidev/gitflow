var connect = require('./storage');

connect.then(function(db){

  var User =  db.collections.user;
  User.create({name: 'cmosh', email: 'usew'}).exec(function(err, user){
        User.findOne({ name: 'cmosh' })
        .exec(function(err, user) {
            console.log(user);
        });
  });


});