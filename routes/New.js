import express from 'express';
import { messages } from '../data/messages.js';
const newRouter = express.Router();

newRouter.get('/', (req, res) => {
    res.render('new');
})

newRouter.post('/', (req, res) => {
    const {author, message} = req.body;
    console.log(req.body);
    messages.push({id: messages.length + 1, text: message.trim(), user: author.trim(), added: new Date()});

    res.redirect('/');
})
export {newRouter}