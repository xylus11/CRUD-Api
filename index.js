const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productRoute = require('./ROutes/product.route.js')



app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.use('/api/products',productRoute);

app.get('/', (req,res)=>{
    res.send("hello from this node ");
})









mongoose.connect("mongodb+srv://mangesh:pffSypLYZ5mlvZzi@backend.jwbbkom.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend")
.then(()=>{
    console.log("database connected");
    app.listen(3000, ()=>{
        console.log("server runnig on port 3000")
    });
})
.catch(()=>{
    console.log("error connnecting to database");
})