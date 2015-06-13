var fs  = require("fs");

var calc = function (n, m) {
  var arr = [], result = [], index = 0;
  for (var i = 0; i < n; i++)
    arr.push(i);
  while (arr.length) {
    index = (index + m - 1) % arr.length;
    result.push(arr[index]);
    arr.splice(index, 1);
  }
  return result.concat(arr);
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var n = parseInt(line.split(',')[0]);
    var m = parseInt(line.split(',')[1]);
    var out = calc(n, m);
    console.log(out.join(' '));
  }
});