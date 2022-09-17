const path = require('path');
const router = require("express").Router();
const {v4 : uuidv4} = require('uuid')
const id = uuidv4();

router.get('/notes', (req,res)=>{
    res.header("Content-Type", 'application/json')
    res.sendFile(path.join(__dirname,'../db/db.json'));
});


//following code posts new data into the html and then to db.json and hopefully adds a unique ID.
router.post('/notes',(req,res)=>{
    const noteTitle = req.body.title;
    const noteText = req.body.text;
    
    req.body.id = id

    console.log(noteTitle, noteText, req.body.id)

    //use document.querySelecter().value and red.body together to create the new data???
    
    res.json({noteTitle, noteText});
});

module.exports = router;