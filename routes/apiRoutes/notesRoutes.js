const path = require('path');
const router = require("express").Router();
const {v4 : uuidv4} = require('uuid')
const id = uuidv4();
const{
    getNotes,
    saveNote,
    handleNoteSave,
    getAndRenderNotes,
    renderActiveNote
}=require('../../public/assets/js/index.js')

router.get('/notes', (req,res)=>{
    res.header("Content-Type", 'application/json')
    res.sendFile(path.join(__dirname,'../../db/db.json'));
});


//following code posts new data into the html and then to db.json and hopefully adds a unique ID.
router.post('/notes',(req,res)=>{
    const noteTitle = req.body.title;
    const noteText = req.body.text;
    
    req.body.id = id

    console.log(noteTitle, noteText, req.body.id)

    //use document.querySelecter().value and red.body together to create the new data???
    
    res.json({noteTitle, noteText, id});
});

module.exports = router;