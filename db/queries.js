import pool from "./pool.js";

async function getAllMessages() {
    const {rows} = await pool.query(
        `SELECT *
        FROM messages
        `
    )
    return rows;
}

async function getMessageById(id){
    const {rows} = await pool.query(
        `SELECT *
        FROM messages
        WHERE messages.id=$1
        `
    , [parseInt(id)])
    if(rows.length!=1){
        throw Error('Multiple or no entries returned upon searching for an id');
    }
    return rows[0];
}

async function addNewMessage(username, text) {
    const query = `
        INSERT INTO messages (username, text)
        VALUES
            ($1, $2)
    `;
    try {
        await pool.query(query, [username, text]);
    } catch (error) {
        console.log('Query rejected');
        throw error
        
    }

}

const db = {
    getAllMessages,
    getMessageById,
    addNewMessage
}
export default db;