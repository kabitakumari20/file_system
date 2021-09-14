const file_system=require("fs")
file_system.writeFile("manvi.text",`hey i am manvi
i am from bihar
now i am in navgurukul`,function(err){
    if (err){
        console.log(err)
    }else{
        console.log("your data is save")
    }
})