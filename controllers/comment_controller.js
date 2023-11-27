const Comment = require('../models/comment');
const Blog = require('../models/blog');

module.exports.create = async function(req,res){
    const {content,blogId} = req.body;
    try {
        if(req.user){
            const blog = await Blog.findById(blogId);
            const comment = await Comment.create({
                content: content,
                createdBy: req.user._id,
                associatedBlog: blogId
            });
            blog.comment.push(comment)
            blog.save();
            return res.redirect(`back`)
        }
        else{
            return res.redirect('/user/login')
        }
    } catch (error) {
        console.log(`error in finding Blog`);
        return res.end(`404 Not Found`)
    }
}
module.exports.destroy = async function(req,res){
    try {
        if(req.user){
            const commentId = req.params.id;
            const comment = await Comment.findByIdAndDelete(commentId);
            const blogId = comment.associatedBlog;
            await Blog.findByIdAndUpdate(blogId,{$pull: {comment: req.params.id}});
            return res.redirect('back')
        }
        return res.redirect('back')
    } catch (error) {
        console.log("Error in deleting the Comment")
        return res.end(`Bad Request`);
    }

}