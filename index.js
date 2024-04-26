const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port);
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({message : "Hello from express!"});
})

app.get('/:name',(req,res)=>{
    res.status(200).json({message : `Hello ${req.params.name}! How are you?`});
})