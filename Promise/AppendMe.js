const fs = require("fs").promises


fs.appendFile('dan.txt', ' Good day')
.then(() =>{
    console.log("Created Successfully");
})
.catch((e) =>{
    console.log(e);
});