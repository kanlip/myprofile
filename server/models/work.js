const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workSchema = new Schema({
  workType:{
    type: String,
    enum: ['experience','web','app','game'],
    required:true
  },
  work: {
    type:String,
    required: true
  },
  image:{
    type:String,
    required:true
  },
  link:{
    type:String,
    required:true
  }
})
const ModelClass = mongoose.model('works',workSchema);

module.exports = ModelClass;
