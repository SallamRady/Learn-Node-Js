const  path  = require('path');

const products = [];

module.exports.Dashboard = (req,res,next)=>{
    const context ={
        'products':products
    }
    res.render(path.join('admin','home.ejs'),context)
}

module.exports.AddProduct = (req,res,next)=>{
    res.render(path.join('admin','addProduct'))
}

module.exports.CreateProduct = (req,res,next)=>{
    products.push(req.body);
    console.log('product',products)
    res.redirect('/admin');
}

module.exports.SingleProduct = (req,res,next)=>{
    res.send('<h1>SingleProduct Page</h1>');
}

module.exports.products = products;