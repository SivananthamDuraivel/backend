const express = require('express')
const app =express()
const path=require('path')

//port number
const PORT=process.env.PORT||3500;

//middleware
//to accept the data provided by the user either through html-forms or as JSON from other sources
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//for allowing acces to static(css,img) contents
app.use(express.static(path.join(__dirname,'assets')))
console.log((path.join(__dirname,'./public')))

//request and responses

app.get('^/$|index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'exp','index.html'))
})
app.get('/page2(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'exp','page2.html'))
})
app.get('/page1(.html)?',(req,res)=>{
    res.redirect(302,'page2.html');
})

// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'exp','error.html'))
// })


//chaining using next()

const one=(req,res,next)=>{
    console.log("one");
    next()
}
const two=(req,res,next)=>{
    console.log("second")
    next()
}
const three=(req,res)=>{
    console.log("third")
    res.send("Finished")
}
app.get('/chain(.html)?',[one,two,three])

app.listen(PORT,(err)=>
{   
    if(err)
        console.error(err)
    else
        console.log(`Server runnning on : ${PORT}`)
})