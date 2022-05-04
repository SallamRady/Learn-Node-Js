module.exports.HomePage = (req,res,next)=>{
    res.send('<h1>Home Page</h1>');
}

module.exports.AboutPage = (req,res,next)=>{
    res.send('<h1>About Page</h1>');
}

module.exports.ContactPage = (req,res,next)=>{
    res.send('<h1>Contact Page</h1>');
}