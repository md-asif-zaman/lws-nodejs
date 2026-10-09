import fs from 'node:fs';

fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
});

console.log("Hello");