import express from 'express';


import indexController from '../controllers/indexController.js';

const indexRouter = express.Router();

// indexRouter.get('/', (req, res) => {
//     res.render('index', {title: 'Mini Mesageboard', messages: messages.map(message => ({...message, isDetailed:false}))})
// })
indexRouter.get('/',indexController.getAllMessages)

indexRouter.get('/message/:id', indexController.getMessageById);



export {indexRouter};