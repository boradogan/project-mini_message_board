import express from 'express';

import newController from '../controllers/newController.js';
const newRouter = express.Router();

newRouter.get('/', (req, res) => {
    res.render('new');
})

newRouter.post('/', newController.addNewMessage)
export {newRouter}