const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));

const path = require('path');
//const app = express();

//htmlRoutes
app.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

//api routes
//following code retrives data from db.json
const {v4 : uuidv4} = require('uuid')
const id = uuidv4();
app.get('/api/notes', (req,res)=>{
    res.header("Content-Type", 'application/json')
    res.sendFile(path.join(__dirname,'./db/db.json'));
})
//following code posts new data into the db.json and hopefully adds a unique ID.
app.post('/api/notes',(req,res)=>{
    const noteTitle = req.body.title;
    const noteText = req.body.text;
    
    res.send();
})

app.listen(PORT, ()=>{
    console.log('server is up and running')
})