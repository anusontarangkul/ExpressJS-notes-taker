const { noteDB } = require('../../db/db.json');
const router = require('express').Router();
const { createNote, createNoteFromDelete } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    console.log(noteDB)
    res.json(noteDB)
});

router.post('/notes', (req, res) => {
    req.body.id = noteDB.length.toString();

    const newNote = createNote(req.body, noteDB);
    res.json(newNote)
});

router.delete('/notes/:id', (req, res) => {

    const noteIndex = req.params.id;

    const noteObj = noteDB.find(note => note.id === noteIndex);

    let deletenoteIndex = noteDB.indexOf(noteObj);
    console.log('before delete')
    console.log(noteDB)
    noteDB.splice(deletenoteIndex, 1);
    let newNotesDB = noteDB.filter(value => Object.keys(value).length !== 0);
    const newNote = createNoteFromDelete(newNotesDB);
    res.send(noteObj);
})

module.exports = router;