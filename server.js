const express = require('express');
const app = express();
const { notes } = require('./data/notes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const notes = createNewNote(req.body, notes);
    res.json(req.body);
});

function createNewNote(body, notesArray) {
    console.log(body);
    return body;
}
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});