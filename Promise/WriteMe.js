const fs = require("fs").promises

fs.writeFile('dan.txt', 'Good day')
    .then(() =>{
        console.log("Created Successfully");
    })
    .catch((e) =>{
        console.log(e);
    });