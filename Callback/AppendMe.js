const fs = require("fs")


fs.appendFile('newfiles.txt', 'Update', (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Created Successfully")
    }
    
})