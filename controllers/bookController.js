const Book = require('../models/book')
const Author = require('../models/author')
const BookInstance = require('../models/bookinstance')
const Genre = require('../models/genre')

const async = require('async')

exports.index = async (req, res) => {
  // res.send('未实现：站点首页')
  async.parallel(
    {
      book_count: async function (callback) {
        return await Book.countDocuments({}) // Pass an empty object as match condition to find all documents of this collection
      },
      book_instance_count: async function (callback) {
        return await BookInstance.countDocuments({})
      },
      book_instance_available_count: async function (callback) {
        return await BookInstance.countDocuments({ status: 'Available' })
      },
      author_count: async function (callback) {
        return await Author.countDocuments({})
      },
      genre_count: async function (callback) {
        return await Genre.countDocuments({})
      }
    },
    function (err, results) {
      console.log('results :>> ', results)
      res.render('index', {
        title: 'Local Library Home',
        error: err,
        data: results
      })
    }
  )
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
