import db from "../db/queries.js";
async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', {title: 'Mini Mesageboard', messages: messages.map(message => ({...message, isDetailed:false}))})
}
async function getMessageById(req, res) {
    const {id} = req.params;
    console.log(`Accessing message with id: ${id}`);
    const message = await db.getMessageById(id);
    console.log(message);
    if(!message){
        return res.status(404).send('<h1>Not Found</h1>')
    }
    res.render('messageDetail', {id: message.id, username: message.username, text:message.text, added:message.added});
    
}
const indexController = {
    getAllMessages,
    getMessageById
}
export default indexController;
