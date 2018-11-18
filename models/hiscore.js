const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hiscoreSchema = new Schema({
  name: String,
  score: Number,
  time: Number,
  speed: Number,
},
{
  timestamps: true,
});

module.exports = mongoose.model('Hiscore', hiscoreSchema);