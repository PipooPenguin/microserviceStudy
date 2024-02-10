const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port=3004;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("success");
})

app.listen(port,()=>{
    console.log("evenBus listening on port ",port);
})
