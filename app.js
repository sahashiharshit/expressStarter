const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product', (req,res,next)=>{
    res.send(`<h1>Add Product</h1><br><form action="/product" method="POST">Name <input type="text" name="product">
        <br><br>Size <input type="number" name="size">
        <button type="submit">Add Product</button></form>`);
});
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req,res,next)=>{
    res.send('<h1>Hello from express</h1>');
});


const server = http.createServer(app);
server.listen(3000);
