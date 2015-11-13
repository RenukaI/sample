var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var OppSchema = new Schema({
  Name: String
},{ collection : 'Opportunities' });


module.exports = mongoose.model('Opportunities', OppSchema);