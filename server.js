
// const fs=require('fs');
// const path=require('path');

// fs.readFile(path.join(__dirname,'files','start.txt'),(err,data)=>
// {
//     if(err)
//         console.log(err)
    
//         console.log(data.toString())
// })

// fs.writeFile(path.join(__dirname,'files','write.txt'),'This is written by node.js',err=>{
//     if(err) throw err;
//     console.log("writing done")
//     fs.appendFile(path.join(__dirname,'files','write.txt'),'\n APPENDED TXT',err=>{
//         if (err) throw err;
//         console.log("appended")
//     })
// })

// // process.on('uncaughtException',err=>{
// //     console.error(err);
// //     process.exit(1)
// // })

const http = require('http')
const fs=require('fs')
const PORT=3000

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    fs.readFile('./index.html',(err,data)=>{
        if(err)
        {
            res.writeHead(404)
            res.write("Page not found error")
        }
        else{
            res.write(data)
        }
        res.end();
    })
})
server.listen(PORT,(err)=>{
    if(err)
        console.log(err)
    else    
        console.log("server is running on",PORT);
})