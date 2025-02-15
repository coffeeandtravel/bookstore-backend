const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const bookRoutes = require('./Routes/Books.routes')


const app = express();
const port = process.env.PORT||3000;

const uri = "mongodb+srv://test:test@trial.bgzr6.mongodb.net/bookInventory?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use('/books', bookRoutes);


app.get('/', (req, res)=>{
  res.send(`<body style="background-color:#0d0d0d"><h1 style="display:flex; height:90vh; justify-content:center; text-align:center; align-items:center; color:white; ">Bookstore API </h1></body>`)
})


mongoose.connect(uri)
  .then(()=>console.log("Connected to MongoDB using Mongoose"))
  .catch(err=>console.error('Failed to connect to MongoDB', err));


app.listen(port, () =>{
  console.log(`Server is running on port: ${port}`)
})
