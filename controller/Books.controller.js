const Book = require('../Model/Book.product');
const { filterBook } = require('./Books.filter');
//add a book
const addBook = async(req,res)=>{
    try{
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(200).json(savedBook);
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
}
const getBooks = async(req, res)=>{
    try {
        const filter = filterBook(req.query)
        const book = await Book.find(filter);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

const updateBook = async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id,req.body, { new: true });
        if(!book){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json(book)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const deleteBook = async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({message:"Deleted Successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const singleBook = async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).json({message:"Book not found"});
        }
        res.status(200).json(book)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports = {getBooks, addBook, updateBook, deleteBook, singleBook}