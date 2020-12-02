const router = require('express').Router();
let db = require('../db/db.json');
const fs = require("fs");
var idCount = 0;

router.get('/notes', (req, res) => {
    var oldNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    var ids = oldNotes.map(note => note.id);
    var maxId = Math.max(...ids);
    idCount = maxId + 1;
    res.json(oldNotes);
});
router.post('/notes', (req, res) => {
    var newNote = req.body;
    var oldNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    newNote.id = idCount;
    oldNotes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(oldNotes));
    res.json(oldNotes);
    
});
router.delete('/notes/:id', (req, res) => {
    var oldNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    var noteToDelete = parseInt(req.params.id);
    oldNotes = oldNotes.filter(current => {
        return current.id !== noteToDelete;
    })

    fs.writeFileSync('./db/db.json', JSON.stringify(oldNotes));
    res.json(oldNotes);
})



module.exports = router;


