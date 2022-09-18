const path = require('path');
const router = require("express").Router();
const {v4 : uuidv4} = require('uuid')
const fs =require('fs');
const util=require('util');
const readFile = util.promisify(fs.readFile);
const writeFile =util.promisify(fs.writeFile);

//following code reads data from json files, parses it to string data.
function getNotes(){
    return readFile('db/db.json','utf-8').then(rawNotes=>{
        return JSON.parse(rawNotes)
    })
}

//following code uses getNotes function, and then displays the data.
router.get('/notes', (req,res)=>{
    getNotes().then(notesArray=>res.json(notesArray))
});


//following code posts new data into the html and then to db.json and hopefully adds a unique ID.
router.post('/notes',(req,res)=>{
    getNotes().then(oldArray=>{ 
        console.log(oldArray) 
    
        var noteObject = {title:req.body.title, text: req.body.text, id: uuidv4()}
        var newArray = [...oldArray, noteObject];
        writeFile('db/db.json',JSON.stringify(newArray)).then(()=>res.json({ message: 'okay' }))
    })


    // console.log(noteTitle, noteText, req.body.id)

    //res.json(saveNote(req.body));
    

});


//following code doens't meet MVP.
// router.delete ( use filter to look over array, make new array with all of arrays that don't match, run writeFile again
// with shortened array. send res.json(okay) when done)

router.delete('/notes',(req,res)=>{
    deleteArray=[];
    getNotes().then(oldArray=>{ 
        oldArray.push(oldArray).filter(oldArray!==oldArray).push(deleteArray);
        writeFile('db/db.json', JSON.stringify(deleteArray)).then(()=>res.json({ message: 'delete succesful' }))
    })
});

module.exports = router;