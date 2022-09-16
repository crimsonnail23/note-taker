const path = require('path');
const app = express();
const router = require("express").Router();
const {v4 : uuidv4} = require('uuid')

const id = uuidv4();

app.get('/api/notes', (req,res)=>{
    res.header("Content-Type", 'application/json')
    res.sendFile(path.join(__dirname,'../db/db.json'));
});


//following code posts new data into the db.json and hopefully adds a unique ID.
app.post('/api/notes',(req,res)=>{
    const noteTitle = req.body.title;
    const noteText = req.body.text;
    
    res.send();
});

moudule.exports = router;