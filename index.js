
const express=require('express') 
const path=require('path')
//import file
const workinghours=require('./public/workinghours')
//init express
const app= express()
//middleware

app.use(workinghours)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(5000,(err)=>
{
    if (err){
        throw err
    }
        else{
            console.log('SERVER IS RUNNING..')
        }
    
})