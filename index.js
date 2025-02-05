const express = require('express');
const data = require('./MOCK_DATA.json');
const app = express()



app.get('/',(req,res)=>{
    res.json({
        message:'Lista de usuarios',
        body:data
    })
    
})

app.listen(3000,()=>{
    console.log("Servidor Levantado")
})