const Book = require('../models/book')

console.log(Book)

exports.index = (req, res) => {
  res.send('未实现：站点首页')
}

exports.book_list = (req, res) => {
  res.send('未实现：书籍列表')
}

exports.book_detail = (req, res) => {
  res.send('未实现：书籍详情')
}

exports.book_create_get = (req, res) => {
  res.send('未实现：创建书籍表单的 GET')
}

exports.book_create_post = (req, res) => {
  res.send('未实现：创建书籍的 POST')
}

exports.book_delete_get = (req, res) => {
  res.send('未实现：删除书籍表单的 GET')
}

exports.book_delete_post = (req, res) => {
  res.send('未实现：删除书籍的 POST')
}

exports.book_update_get = (req, res) => {
  res.send('未实现：更新书籍表单的 GET')
}

exports.book_update_post = (req, res) => {
  res.send('未实现：更新书籍信息的 POST')
}
