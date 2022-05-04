// Declaration...
const express = require('express');
const path = require('path');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const rootPath = require('./unils/rootPath');

// Create Server
const app = express();
// Server Configration.
app.use(express.static(path.join(rootPath,'public')))
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