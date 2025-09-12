import express from 'express';

import { messages } from '../data/messages.js';


const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.render('index', {title: 'Mini Mesageboard', messages: messages.map(message => ({...message, isDetailed:false}))})
})

indexRouter.get('/message/:id', (req, res) => {
    const {id} = req.params;
    console.log(`Accessing message with id: ${id}`);
    const message = messages.find(message => message.id === parseInt(id));
    console.log(message);
    if(!message){
        return res.status(404).send('<h1>Not Found</h1>')
    }
    res.render('messageDetail', {id: message.id, user: message.user, text:message.text, added:message.added});

})



export {indexRouter};