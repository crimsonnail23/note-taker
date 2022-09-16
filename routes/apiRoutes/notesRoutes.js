const path = require('path');
const app = express();


app.get('/api/notes', (req,res)=>{
    res.header("Content-Type", 'application/json')
    res.sendFile(path.join(__dirname,'../db/db.json'));
})