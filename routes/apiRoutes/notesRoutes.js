const path = require('path');
const app = express();

app.get('/api/notes', (req,res)=>{
    res.send('this does work');
})