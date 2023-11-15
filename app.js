const express = require('express')
const PORT = 8000;

const app = express();

app.get('/',(req,res)=>{
    res.end('Hello World')
})

app.listen(PORT,()=>{
    console.log("Server is Running on ",PORT);
})