const fs = require("fs")

fs.readFile('newfiles.txt', 'utf8', (err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
    }
    
})