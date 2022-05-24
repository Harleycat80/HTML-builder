const fs = require("fs");
const path = require("path");
let readDir = path.join(__dirname, 'secret-folder/')

function ReadingFiles(way) {
   fs.readdir(way, (err, data)=>{
      if(err){
         throw err
      }
      data.forEach(file=>
         fs.promises.stat(way + file)
         .then(function (content){
            if(content.isFile()){
             console.log('Файл: ' + path.parse(file).name +'  ' +'Расширение:'+ path.extname(file) + '  ' +'Размер: '+  content.size+ 'б')}
            else if(content.isDirectory){
               return
              ReadingFiles(`${way + file}/`)
   
              }}
   

            ).catch((err)=>console.log(err)))
           
      
      })}

ReadingFiles(readDir) 
