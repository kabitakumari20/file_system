// its comining in buffer

// const file_system=require("fs")
// file_system.readFile("file.text",function(err,data){
//     if (err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })



const file_system=require("fs")
file_system.readFile("file.text",'utf8', function(err,data){
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})