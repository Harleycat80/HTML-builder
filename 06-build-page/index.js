const { on } = require('events');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const newIndex = fs.createWriteStream(
  path.join(__dirname, 'project-dist', 'index.html')
);


const oldIndex = fs.createReadStream(path.join(__dirname, 'template.html'));
const rl = readline.createInterface({
  input: oldIndex,
  output: newIndex,
});

const newFile = fs.createWriteStream(path.join(__dirname, 'project-dist/', 'style.css'));
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


let res;
rl.on('line', function (line) {

  if (line.trim().startsWith('{{')) {
    res = line.trim().slice(2, line.trim().length - 2);
    let stream = fs.createReadStream( path.join(__dirname, 'components', `${res}` + '.html'), 'utf-8');
    stream.on('data', chunk=>
       newIndex.write(chunk+'\n'),
   
    )
  }
  else{
    newIndex.write(line+'\n')
  }
 
}
)
