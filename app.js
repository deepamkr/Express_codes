const express =require('express')
const path=require('path')
const members= require('./public/members')
const logger= require('./middleware/logger')

const app =express();
//INIT middleware
//app.use(logger)

//gets all memebers
app.get('/api/members',(req,res)=>res.send(members))

//Get single member
app.get('/api/members/:id',(req,res)=>{
    res.json(members.filter(members=> members.id==parseInt(req.params.id)))
})




//set static folder
app.use(express.static(path.join(__dirname,'public')))




const PORT =process.env.PORT|| 5000;
app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`)
})