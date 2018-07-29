'use strict'

const fs = require('fs');
const http = require ('http');

const server = http.createServer();
server.on('request', (request, response) => {

    switch (request.url) {
        case '/app.json': response.end(fs.readFileSync('./app.json')); break;
        case '/index': response.end(fs.readFileSync('./index.html')); break;        
        default: response.end(fs.readFileSync('./front-page.html')); break;
    }

});

server.listen(process.env.PORT || 8082);
