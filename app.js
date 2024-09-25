const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const errorController = require('./controllers/errorControllers')
app.set('view engine','ejs');
app.set('views','views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require("./routes/contact");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(shopRoutes);
app.use('/admin',adminRoutes);
app.use(contactRoutes);


app.use(errorController._404page);

app.listen(3000);
