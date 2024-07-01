const fs = require('fs');

/**
 * 2. NodeJS 'fs' module.
Google for the unknown functions (for example "nodejs fs mkdirSync")
Create some input file.

a) Read from the file input.txt into a variable 
b) Write the text from the variable into new-text.txt
c) Write the same text again into new-text.txt
d) Check that the text appears only once in new-text.txt
e) Write the text from the variable into text-again.txt
f) Use fs.appendFileSync() to really append the text to text-again.txt
g) Check that the text appears twice now in text-again.txt
h) Now use function readdirSync() - what do you get?
i) Check if dir named "new-dir" already exists. 
j) If not create it using mkdirSync()
k) Write new file into this dir

 */

let data1 = fs.readFileSync('./data/input.txt','utf-8');

fs.writeFileSync('./data/new-text.txt',data1);

fs.writeFileSync('./data/new-text.txt',data1);
fs.writeFileSync('./data/new-text.txt',data1+'\n'+data1); //writes 2 lines
let data2 = fs.readFileSync('./data/chocolate.txt','utf-8');
fs.writeFileSync('./data/new-text.txt',data2);

fs.writeFileSync('./data/text-again.txt',data1);
fs.appendFileSync('./data/text-again.txt','\n');
fs.appendFileSync('./data/text-again.txt',data1);

let filesInThisDir = fs.readdirSync('.');
console.log(filesInThisDir);
let filesInDataDir = fs.readdirSync('./data');
console.log(filesInDataDir);

