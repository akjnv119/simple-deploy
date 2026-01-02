import express from 'express'
import dotenv from 'dotenv'

const app = express()


dotenv.config({
    path:'.env'
})

app.get('/',(req,res)=>{
    res.send("I am Aman")
})

app.get('/twitter',(req,res)=>{
    res.send("I am using twitter")
})


app.get('/contact',(req,res)=>{
    res.send("I am using from Lucknow")
})

app.listen(process.env.PORT || 4000,()=>{
    console.log(`App is listening on Port ${process.env.PORT}`);
    
})


