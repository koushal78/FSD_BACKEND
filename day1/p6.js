const fs = require("fs");

const data = "\n i am append to last"

fs.appendFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("Data appended data successfully")
})