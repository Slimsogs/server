const http = require("http");
const fs = require("fs");
const port = 3000
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'content-type': 'html'});
    fs.readFile("./index.html", (err, data) =>{
        res.write(data)
        res.end()
    })
});
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})