const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 图书种类模型
const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100
  }
})

GenreSchema.virtual('url').get(function () {
  return '/catelog/genre/' + this._id
})

module.exports = mongoose.model('Genre', GenreSchema)
