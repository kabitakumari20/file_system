const file_system=require("fs")
file_system.readFile("mahi.text","utf8",function(err,data){
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})