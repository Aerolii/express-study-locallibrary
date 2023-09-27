const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookInstanceSchema = new Schema({
  // 指向相关藏书的引用
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  imprint: {
    type: String,
    required: true
  },
  // 书籍的状态
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance'
  },
  // 还书期限
  due_back: {
    type: Date,
    default: Date.now // 默认为今天
  }
})

// 虚拟属性'url': 藏书副本URL
BookInstanceSchema.virtual('url').get(function () {
  return '/catalog/bookinstance/' + this._id
})

module.exports = mongoose.model('BookInstance', BookInstanceSchema)
