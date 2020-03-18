const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./utils/mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*const publicDirectoryPath = path.join()
app.use(express.static(publicDirectoryPath));*/

app.post('/task', (req,res)=>{
    console.log(req.body);
    const task = req.body;
    console.log('task: ', task);
    mongodb.insert(task);
    res.send(task);
});

app.listen(port, () => {
    console.log('Server start at port ' + port);
})