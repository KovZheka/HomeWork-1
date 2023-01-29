const http = require("http");
const path = require("path");
const fs = require("fs");

const host = 'localhost';
const port = 228;
let counter = 1;

let server = http.createServer(function(request, response){
    if(request.url == "/ru"){
        let html = fs.readFileSync(path.join("html/main/RuIndex.html"));
        response.end(html); 
    }else if(request.url == "/ua"){
        let html = fs.readFileSync(path.join("html/main/UaIndex.html"));
        response.end(html);
    }else if(request.url == "/eng"){
        let html = fs.readFileSync(path.join("html/main/EngIndex.html"));
        response.end(html);
    }else if(request.url == "/contact/ru"){
        let html2 = fs.readFileSync(path.join("html/contact/RuContact.html"));
        response.end(html2); 
    }else if(request.url == "/contact/ua"){
        let html2 = fs.readFileSync(path.join("html/contact/UaContact.html"));
        response.end(html2);
    }else if(request.url == "/contact/eng"){
        let html2 = fs.readFileSync(path.join("html/contact/EngContact.html"));
        response.end(html2);
    }else{
        response.writeHead(400, {'Content-Type': 'text/html'});
        response.end(`<center><h2>Error: 404</h2></center>`)
    }
})
server.listen(port, host, () => {
    console.log(`[Console] Server is running on http://${host}:${port}`);
});