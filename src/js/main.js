var fileSystem = require('fs');
const http = require('http');
const path = require("path");
const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer(function(req,resp) {
    let types = {
        ".js": "text/javascript",
        ".html": "text/html"
    }
    
    var filePath = `.${req.url}`;
    if(filePath == "./") {
        filePath = "index.html";
    }

    let extensionType = path.extname(filePath);

    if(extensionType in types) {
        let type = types[extensionType];

        if(filePath == "index.html") {
            filePath = "../index.html";
        } 

        if(filePath == "./js/page.js") {
            filePath = "../js/page.js";
        }

        fileSystem.readFile(filePath, function(error, fileContent) {
            if(error) {
                resp.writeHead(500, {'Content-Type': 'text/plain'});
                resp.end('Error');
            }
            else {
                resp.writeHead(200, {'Content-Type': type});
                resp.write(fileContent);
                resp.end();
            }
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})