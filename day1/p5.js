const fs =  require("fs")

const data = "this is new method of filewriting"
fs.writeFile("./data.txt",data,(err)=>{
    if(err)
        console.error("Error writing file",err)
    else
      console.log("File written successfully")
})