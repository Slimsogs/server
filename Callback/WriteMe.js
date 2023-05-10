const fs = require("fs")

fs.writeFile('newfiles.txt', 'Hello', (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Created Successfully")
    }
    
})