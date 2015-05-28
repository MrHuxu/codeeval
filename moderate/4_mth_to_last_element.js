var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var arr = line.split(' ');
    var index = parseInt(arr[arr.length - 1]);
    if (index < arr.length)
      console.log(arr[arr.length - parseInt(arr[arr.length - 1]) - 1]);
  }
});
