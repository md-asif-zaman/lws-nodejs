import http from 'node:http';

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hello programmers!');
        res.write('How are you doing?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not Found..');
        res.end();
    }


});

server.listen(3000);

console.log("Listening on port 3000");