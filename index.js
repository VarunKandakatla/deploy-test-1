const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port);
app.use(express.json());

let dataList = [];

get().then(()=>{
    console.log('loaded...!');
})

app.get('/',(req,res)=>{
    res.status(200).json({message : "Hello from express!"});
})

app.get('/add/:name',(req,res)=>{
    const name = req.params.name;
    dataList.push(name);
    save().then(()=>{
        res.status(200).json({message : "saved!"});
    })
})

app.get('/all',(req,res)=>{
    res.status(200).json({Data : dataList});
})

app.get('*',(req,res)=>{
    res.send("Invalid Route");
})

function save()
{
    return new Promise((resolve,reject)=>{
        fs.writeFile('file.json',JSON.stringify(dataList),(err)=>{
            resolve();
        })
    })
}

function get()
{
    return new Promise((resolve,reject)=>{
        fs.readFile('file.json','utf-8',(err,data)=>{
            dataList = JSON.parse(data);
            resolve();
        })
    })
}