const fs = require("fs");
const path = require("path");
const readline = require("readline");
const newFile = fs.createWriteStream(path.join(__dirname, "text.txt"));
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const exit = '.exit';

rl.question('Как успехи в JS? \n', function (data) {
  if (data == exit) {
    rl.close();
  } else {
    console.log(data + ' ' + 'Серьезно? Так и запишем)');
    newFile.write(data + '\n');
  }
});
rl.on("line", function (data) {
  if (data == exit) {
    rl.close();
    return;
  }
  console.log('Так и запишем)');
  fs.appendFile(path.join(__dirname, 'text.txt'), data + '\n', (err) => {
    if (err) {
      throw err;
    }
  });
});

rl.on('close', () => {
  console.log('By)))');                                                                                                                                                                
});
rl.on('exit', () => {
  console.log('By)))');
});
