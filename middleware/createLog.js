const fs=require('fs')
const {format}=require('date-fns')
const fsPromises=require('fs').promises
const {v4:uuid}=require('uuid')
const path=require('path')

const createLog= async(message) =>{
    const dateTime=`${format(new Date(),'ddMMyyyu\tHH:mm:ss')}`
    const logdata=`${dateTime}\t${uuid()}\t${message}\n`
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs')))
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        await fsPromises.appendFile(path.join(__dirname,'..','logs','reqLog.txt'),logdata)
    }
    catch(err)
    {
        console.error(err)
    }
}
module.exports=createLog