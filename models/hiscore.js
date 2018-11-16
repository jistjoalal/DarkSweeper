const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: add recorded_at Date field
const hiscoreSchema = new Schema({
  name: String,
  score: Number,
  time: Number,
})

module.exports = mongoose.model('Hiscore', hiscoreSchema);