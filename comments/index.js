const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const moment = require('moment');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());
moment.locale('vi')

// const comments = {};
app.post("/post/:id/create",(req,res)=>{
    const id = randomBytes(5).toString('hex');
    const {content} = req.body;
    // if (comments[req.params.id]== null)
    // {
    //     comments[req.params.id] = [];
    // }
    const newcomments = {id, content};
    // comments[req.params.id].push(newcomments);
    // console.log("comments post /post/:id/create comments: ",comments);
    res.send(comments);
})

app.listen(port,(req,res)=>{
    console.log("listening on port ", port);
})