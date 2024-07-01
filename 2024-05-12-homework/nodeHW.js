//a
const fs = require('fs');
const inputText = fs.readFileSync('input.txt', 'utf8');

//b
fs.writeFileSync('new-text.txt',inputText);

//c
fs.writeFileSync('new-text.txt', inputText);

//d
const newTextContent = fs.readFileSync('new-text.txt', 'utf8');
console.log(newTextContent);

//e
fs.writeFileSync('text-again.txt', inputText);

//f
fs.appendFileSync('text-again.txt', inputText);

//g
const textAgainContent = fs.readFileSync('text-again.txt', 'utf8');
console.log(textAgainContent);

//h
const files = fs.readdirSync('./');
console.log(files);

//i
const dirExists = fs.existsSync('new-dir');
console.log(dirExists);

//j

if (!dirExists) {
    fs.mkdirSync('new-dir');
  }

//k
fs.writeFileSync('./new-dir/new-file.txt', 'This is a new file');