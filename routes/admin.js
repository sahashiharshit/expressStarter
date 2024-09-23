const express = require("express");
const router = express.Router();


router.get('/add-product', (req,res,next)=>{
    res.send(`<h1>Add Product</h1><br><form action="/product" method="POST">Name <input type="text" name="product">
        <br><br>Size <input type="number" name="size">
        <button type="submit">Add Product</button></form>`);
});
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports = router