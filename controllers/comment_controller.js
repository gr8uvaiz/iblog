const Comment = require('../models/comment');
const Blog = require('../models/blog');

module.exports.create = async function(req,res){
    const {content,blogId} = req.body;
    try {
        const blog = await Blog.findById(blogId);
        const comment = await Comment.create({
            content: content,
            createdBy: req.user._id,
            associatedBlog: blogId
        });
        blog.comment.push(comment)
        blog.save();
        return res.redirect(`back`)
    } catch (error) {
        console.log(`error in finding Blog`);
        return res.end(`404 Not Found`)
    }
}
module.exports.destroy = async function(req,res){
    try {
        const commentId = req.params.id;
        await Comment.findByIdAndDelete(commentId);
        return res.redirect('back')
    } catch (error) {
        console.log("Error in deleting the Comment")
        return res.end(`Bad Request`);
    }

}