const BookInstance = require('../models/bookinstance')

console.log(BookInstance)

exports.book_instance_list = (req, res) => {
  res.send('未实现：查询书籍列表')
}

exports.book_instance_detail = (req, res) => {
  res.send('未实现：查询书籍详细信息')
}

exports.book_instance_create_get = (req, res) => {
  res.send('未实现：创建书籍表单的 GET')
}

exports.book_instance_create_post = (req, res) => {
  res.send('未实现：创建书籍的 POST')
}

exports.book_instance_delete_get = (req, res) => {
  res.send('未实现：删除书籍表单的 GET')
}

exports.book_instance_delete_post = (req, res) => {
  res.send('未实现：删除书籍的 POST')
}

exports.book_instance_update_get = (req, res) => {
  res.send('未实现：更新书籍表单的 GET')
}

exports.book_instance_update_post = (req, res) => {
  res.send('未实现：更新书籍信息的 POST')
}
