const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// api test
app.get("/", (req, res) => {
    res.send("Server Created Successfully.....");
});

// all courses data
app.get("/courses", (req, res) => {
    res.send(data);
});

// find course by id
app.get("/course/id/:id", (req, res) => {
    const id = req.params.id;
    const course = data.find(course => course.id === id) || {};
    res.send(course);
});

// find course by title
app.get("/checkout/title/:title", (req, res) => {
    const title = req.params.title;
    const course = data.find(course => course.title === title) || {};
    res.send(course);
});

// listening app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});