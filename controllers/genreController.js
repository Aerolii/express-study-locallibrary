const Genre = require('../models/genre')

console.log(Genre)

exports.genre_list = (req, res) => {
  res.send('未实现： Genre 列表')
}

exports.genre_detail = (req, res) => {
  res.send('未实现： Genre 详情')
}

// 由 GET 显示创建 Genre 的表单
exports.genre_create_get = (req, res) => {
  res.send('未实现：创建 Genre 表单的get')
}

// 由 POST 处理 Genre 创建操作
exports.genre_create_post = (req, res) => {
  res.send('未实现：创建 Genre 的 POST')
}

// 由 GET 显示删除 Genre 的表单
exports.genre_delete_get = (req, res) => {
  res.send('未实现： Genre 删除表单的 GET')
}

exports.genre_delete_post = (req, res) => {
  res.send('未实现：删除 Genre 的 POST')
}

// 由 GET 显示更新 Genre 的表单
exports.genre_update_get = (req, res) => {
  res.send('未实现： Genre 更新表单的 GET')
}
// 由 POST 处理 Genre 更新操作
exports.genre_update_post = (req, res) => {
  res.send('未实现：更新 Genre 的 POST')
}
