const express = require('express')
const Book = require('../Model/Book.product');
const { addBook, getBooks, updateBook, deleteBook, singleBook } = require('../controller/Books.controller');
const router = express.Router();
// const app = express();

router.post('/upload-book', addBook);
router.get('/get-books',getBooks);
router.put('/book/:id',updateBook);
router.delete('/book/:id', deleteBook);
router.get('/book/:id', singleBook);
module.exports = router;