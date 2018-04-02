var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title       : { type: String, required: true },
    description : { type: String },
    createdDate : { type: String, required: true },
    isDone      : { type: Schema.Types.Boolean },
    userId      : { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Task', schema);