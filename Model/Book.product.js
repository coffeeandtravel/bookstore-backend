const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    bookTitle: { type: String, required: true },  
    authorName: { type: String, required: true },  
    imageURL: { type: String, required: true },    
    category: { type: [String], required: true },    
    bookDescription: { type: String, required: true },  
    buyLink: { type: String, required: true }, 
})

const Product = mongoose.model('Book', productSchema);

module.exports = Product;