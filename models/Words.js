var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WordsSchema = new Schema({
    theword: {
        type: String
    },
    language: {
        type: String
    },
    definitions: {
        type: String
    },
    examples: {
        type: String
    }
});

var Words = mongoose.model("Words", WordsSchema);
module.exports = Words;