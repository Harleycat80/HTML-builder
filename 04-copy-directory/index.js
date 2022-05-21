const fs = require('fs');
const path = require ('path')

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true },(err)=>{
if(err){

throw (err)}

fs.readdir(path.join(__dirname, 'files'),function(err,data){
   if (err){
      console.error(err)
   }
data.forEach(file=>{fs.promises.copyFile(path.join(__dirname, 'files')+'/'+file,path.join(__dirname, 'files-copy')+'/'+file )})
})
});
