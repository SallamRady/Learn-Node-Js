// Declaration..
const path = require('path');
const adminController = require('./admin')
module.exports.HomePage = (req,res,next)=>{
    const context = {
        'products':adminController.products
    }
    res.render(path.join('shop','home.ejs'),context)
}

module.exports.AboutPage = (req,res,next)=>{
    res.render(path.join('shop','about.ejs'))
}

module.exports.ContactPage = (req,res,next)=>{
    res.render(path.join('shop','contactUs.ejs'))
}