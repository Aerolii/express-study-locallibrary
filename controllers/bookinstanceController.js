const BookInstance = require('../models/bookinstance')

console.log(BookInstance)

exports.book_instance_list = (req, res) => {
  res.send('未实现：查询书籍副本列表')
}

exports.book_instance_detail = (req, res) => {
  res.send('未实现：查询书籍副本详细信息')
}

exports.book_instance_create_get = (req, res) => {
  res.send('未实现：创建书籍副本表单的 GET')
}

exports.book_instance_create_post = (req, res) => {
  res.send('未实现：创建书籍副本的 POST')
}

exports.book_instance_delete_get = (req, res) => {
  res.send('未实现：删除书籍副本表单的 GET')
}

exports.book_instance_delete_post = (req, res) => {
  res.send('未实现：删除书籍副本的 POST')
}

exports.book_instance_update_get = (req, res) => {
  res.send('未实现：更新书籍副本表单的 GET')
}

exports.book_instance_update_post = (req, res) => {
  res.send('未实现：更新书籍副本信息的 POST')
}
