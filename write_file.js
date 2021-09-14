const file_system=require("fs")
file_system.writeFile("file.text",`hello manvi
i am from navgurukul
i am speand 1 year`,function(err){
    if (err){
        console.log(err)
    }else{
        console.log("ur data is save")
    }
});
