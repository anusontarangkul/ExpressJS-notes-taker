const fs = require('fs');
const path = require('path');

const createNote = (body, noteDB) => {

    const newNote = body;
    noteDB.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteDB }, null, 2)
    )
    return newNote;
}

const createNoteFromDelete = (noteDB) => {

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteDB }, null, 2)
    )
    return noteDB;
}
module.exports = { createNote, createNoteFromDelete }