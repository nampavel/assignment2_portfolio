let mongoose = require('mongoose');

//Create Model of Contact
let contactModel = mongoose.Schema(
    {
        "Name" : String,
        "Email" : String,
        "Number" : String,
        "Text" : String
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model('Contact', contactModel);