const mongoose = require('mongoose')
const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    coverImageUrl:{
        type: String,
        required: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    comment:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment' 
        }
    ]

},{timestamps: true});

const Blog = mongoose.model("blog",blogSchema)
module.exports = Blog;