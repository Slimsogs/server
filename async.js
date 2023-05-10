const fs = require("fs").promises
// const fs = require("fs")

// fs.writeFile('newfiles.txt', 'Hello', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Created Successfully")
//     }
    
// })

// fs.appendFile('newfiles.txt', 'Update', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Created Successfully")
//     }
    
// })

// fs.writeFile('dan.txt', 'Good day')
//     .then(() =>{
//         console.log("Created Successfully");
//     })
//     .catch((e) =>{
//         console.log(e);
//     });

    fs.appendFile('dan.txt', ' Good day')
    .then(() =>{
        console.log("Created Successfully");
    })
    .catch((e) =>{
        console.log(e);
    });