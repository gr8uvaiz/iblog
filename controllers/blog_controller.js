const Blog = require('../models/blog')
module.exports.blog = function(req,res){
    if(!req.user) return res.redirect('/user/login')
    return res.render('blog',{
        title: "Blog | IBlog",
        user: req.user
    })
}
module.exports.create = async function(req,res){
    const {title , content} = req.body;
    const blogImgUrl = req.file.filename;
    const blog = await Blog.create({
        title: title,
        content: content,
        coverImageUrl: `./uploads/${blogImgUrl}`,
        createdBy: req.user,
    })
    return res.redirect(`/blog/${blog._id}`)
}
module.exports.showBlogs =  async function(req,res){
    const id = req.params.id;
    const blog = await Blog.findById(id).populate('createdBy');
    const blogImg = blog.coverImageUrl.slice(1);
    return res.render('display_blogs',{
        title: "Blog | IBlog",
        blog: blog,
        blogImg: blogImg,
        user: req.user
    })
}