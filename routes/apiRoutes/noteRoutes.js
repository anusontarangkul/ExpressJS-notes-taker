const db = require('../../db/db.json');
const router = require('express').Router();
const { createNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    console.log(db)
    res.json(db)
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();
    const newNote = createNote(req.body, db);
    res.json(newNote)
})

module.exports = router;