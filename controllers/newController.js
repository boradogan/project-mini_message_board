import db from "../db/queries.js";


async function addNewMessage(req, res){
    const {author, message} = req.body;
    await db.addNewMessage(author, message);
    res.redirect('/');
}

const newController = {
    addNewMessage
}
export default newController