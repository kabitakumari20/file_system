var file_system = require('fs');
file_system.unlink('sample.txt', function (err) {
    if (err){
        console.log(err)
    }
    else{
        console.log('File deleted!');
    }
});