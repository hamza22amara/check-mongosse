const mongoose = require('mongoose')
const {Schema} = mongoose;
const contactSchema = new Schema({
    _id : {type: 'string', required: true},
    name : {type: 'string', required: true},
    age : number,
    favoriteFood : [string]
});
const contact = mongoose.model('Contact', contactSchema);
module.exports = contact; 