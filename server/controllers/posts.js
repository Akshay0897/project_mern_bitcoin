import express from 'express';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

const filterFns = {
    "value": function(value, posts) {
        return posts.filter(post => post.price_usd > value);
    },
    "searchKey": function(searchKey, posts) {
       return posts.filter(post => post.id.includes(searchKey));
    }
};

export const getPosts = async (req, res) => { 
    try {
        var post = await PostMessage.find();

        var result = Array.from(post);
        console.log(req.query)
        Object.keys(req.query).forEach(queryKey => { 
            result = filterFns[queryKey](req.query[queryKey], result);
     });

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const { id, name, symbol, price_usd, market_cap } = req.body;

    const newPostMessage = new PostMessage({ id, name, symbol, price_usd, market_cap })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;