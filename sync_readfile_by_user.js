var fs = require("fs");
var readline = require('readline-sync'); 
var path = readline.question("Enter file name/: "); 

var buf = new Buffer.alloc(1024);
buf = readline.question("Enter data:");
try {
  fs.writeFileSync(path, buf,{flag:'a+'});
  console.log("File written successfully");
} catch(err) {
  console.error(err);
}
console.log("-----------------------------------------------");
try{
const data = fs.readFileSync(path,{encoding: "utf8"}); 
  console.log("File content is as follows:");
  console.log(data); 
}catch(err){
console.log(err);
}