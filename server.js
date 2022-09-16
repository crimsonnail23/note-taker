const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));

const path = require('path');
//const app = express();

app.get('/api/notes', (req,res)=>{
    res.send('this does work');
})

app.listen(PORT, ()=>{
    console.log('server is up and running')
})