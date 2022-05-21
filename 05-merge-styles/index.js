const fs = require("fs");
const path = require("path");
const newFile = fs.createWriteStream(path.join(__dirname, 'project-dist/', 'bundle.css'));
fs.readdir(path.join(__dirname, 'styles'),(err,data) => {
   if(err){
      console.error(err)
   }
   data.forEach(file=>{
      if(path.extname(file)=='.css'){
         let stream = fs.createReadStream(path.join(__dirname, 'styles/')+file, 'utf-8')
          stream.pipe(newFile)
      }
   }
   )})