
import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(path.join(import.meta.dirname, 'bigdata.txt'), { encoding: 'utf-8' });
    myReadStream.pipe(res);
});

server.listen(3000);

console.log('listening on port 3000');