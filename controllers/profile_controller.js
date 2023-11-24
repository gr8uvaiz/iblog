const User = require('../models/user')
const Blog = require('../models/blog')

module.exports.profile = async function(req,res){
    try {
        if(req.user){
            const userId = req.params.id;
            const user = await User.findById(userId)
            const blogs = await Blog.find({createdBy: userId}).populate('createdBy');
            return res.render('profile',({
                title: "Profile | IBlog",
                user: req.user,
                tempUser: user,
                allBlogs: blogs
                
            }))
        }
        else{
            return res.redirect('/user/login')
        }
        
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
    
}