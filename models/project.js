let mongoose = require('mongoose');

//Create Model of Product
let projectsModel = mongoose.Schema(
    {
        "title" : String,
        "description" : String,
        "deadline" : Date
    },
    {
        collection: "project"
    }
);

module.exports = mongoose.model('Project', projectsModel);