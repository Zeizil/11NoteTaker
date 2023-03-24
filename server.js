const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});


// GET * for index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


// API routes

// GET api/notes
app.get('/api/notes', (req, res) => {
    readFileAsync("db/db.json", "utf-8")
    .then(notes => res.json(JSON.parse(notes)))
    .catch(err => res.json(err))
});


// POST api/notes
app.post('/api/notes', (req, res) => {
    readFileAsync("db/db.json", "utf-8")
    .then(notes => res.json(JSON.parse(notes)))
    .catch(err => res.json(err))
});


// DELETE api/notes
app.delete('/api/notes/:id', (req, res) => {
    readFileAsync("db/db.json", "utf-8")
});