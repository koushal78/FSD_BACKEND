const fs = require("fs")

const data = "this is changed data ";

fs.writeFileSync("data.txt",data)