const express = require('express');

const Blog = require('../models/blogModel.js');

const router = express.Router();

const homepage = async (req, res) => {
    res.writeHead(200);
    res.write('Hello! This is the Homepage.');
    res.end();
}

const readCollection = async (req, res) => {
    try {
        const collection = await Blog.find({});
        res.status(200).json(collection);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

const getBlogByAuthor = async (req,res) => {
    const blogId = req.params.blogId;
    try {
        const blog = await Blog.findOne({blogId: blogId});
        res.status(200).json(blog);
    }
    catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createBlog =  async (req, res) => {
    console.log(req.body);
    const newBlog = new Blog({
        author:req.body.author,
        blogId:req.body.blogId,
        quotes:req.body.quotes,
        created_on:req.body.created_on
    })
    try {
        await newBlog.save();
        res.send('New blog created successfully.').status(201);
        res.end();
    }
    catch(error) {
        res.status(400).json({ message : error.message});
    }
}

const updateBlog = async (req, res) => {
    const blogId = req.params.blogId;
    try{
        await Blog.findOneAndUpdate({
            blogId: blogId,
        },
        {
            author:req.body.author,
            quotes:req.body.quotes,
            created_on:req.body.created_on
        }
        )
        res.send('Blog updated successfully.').status(202);
        res.end();
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

const deleteBlog = async (req, res) => {
    const blogId = req.params.blogId;
    try {
        await Blog.findOneAndRemove({blogId: blogId});
        res.send('Blog is deleted.').status(203)
        res.end();
    }
    catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.homepage = homepage;
module.exports.readCollection = readCollection;
module.exports.getBlogByAuthor = getBlogByAuthor;
module.exports.createBlog = createBlog;
module.exports.updateBlog = updateBlog;
module.exports.deleteBlog = deleteBlog;
