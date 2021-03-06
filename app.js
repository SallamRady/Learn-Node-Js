// Declaration...
const express = require('express');
const path = require('path');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const rootPath = require('./unils/rootPath');
const bodyParser = require('body-parser');

// Create Server
const app = express();
// Server Configration.
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(rootPath,'public')))
app.set('view engine', 'ejs');
app.set('views', './views');
// Basic Middlewatres
app.use((req,res,next)=>{
    console.log('request cross from here.');
    next();//go to next middleware.
});

// shop routes
app.use('/admin',adminRoutes)
app.use(shopRoutes)



// run event loop.
app.listen(3000);