// const fs = require('fs');
// fs.rename('hello.txt', 'world.txt', (err) => {
//     if (err){
//         console.log(err)
//     }else{
//         console.log("File Renamed!");
//     }

// });

const fs=require("fs")
fs.rename('hello.txt', 'geeks.txt', (error) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log("\nFile Renamed\n");
    }
  });