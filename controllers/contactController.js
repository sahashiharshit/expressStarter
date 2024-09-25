exports.getContactUs = (req,res,next)=>{
    res.render('contactus',{
        pageTitle:"Contact Us",
        path:"/contactus",
        mainCSS:true,
        activeContactUs:true
    });
};

exports.getSuccess =(req,res,next)=>{
    res.send('Form successfuly filled');
};