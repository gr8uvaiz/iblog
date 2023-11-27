const Blog = require('../models/blog')
const User = require('../models/user')
module.exports.home = async function(req,res){
    const allBlogs = await Blog.find({}).populate('createdBy');
    return res.render('home',{
        title: "Home | IBlogs",
        user: req.user,
        allBlogs: allBlogs
})

}