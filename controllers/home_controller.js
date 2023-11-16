module.exports.home = function(req,res){
    res.render('home',{
        title: "Home | IBlogs",
        user: req.user
    })
}