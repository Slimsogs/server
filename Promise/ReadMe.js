const fs = require("fs").promises


fs.readFile('dan.txt', 'utf8')
    .then((data) =>{
        console.log(data);
    })
    .catch((e) =>{
        console.log(e);
    });