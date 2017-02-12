var connect = require('camo').connect;

var database;
var uri = 'nedb://'+__dirname;
console.log (uri);
connect(uri).then(function(db) {

var Document = require('camo').Document;

class Company extends Document {
    constructor() {
        super();

        this.name = String;
        this.valuation = {
            type: Number,
            default: 10000000000,
            min: 0
        };
        this.employees = [String];
        this.dateFounded = {
            type: Date,
            default: Date.now
        };
    }

    static collectionName() {
        return 'companies';
    }
}

 var company = Company.create({
    name: 'Lassie',
    valuation: 10,
    employees:["s"]
});

company.save().then(function(l) {
    console.log(l._id);
});
});

