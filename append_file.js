const file_system=require("fs")

file_system.appendFile('manvi.text',    '\ndata to append', function (err) {
  if (err) {
      console.log(arr)
  }else{
    console.log('Saved!');
  }
});
