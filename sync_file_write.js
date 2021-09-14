const fs = require('fs');

let data=`navgurukul is a org
navgurukul is in bangalore
navgurukul is good for girls`
  
fs.writeFileSync("programming.txt", data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt","utf8"));