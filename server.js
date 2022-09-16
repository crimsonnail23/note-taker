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
app.get('/api/notes', (req,res)=>{
    res.header("Content-Type", 'application/json')
    res.sendFile(path.join(__dirname,'./db/db.json'));
})

app.listen(PORT, ()=>{
    console.log('server is up and running')
})