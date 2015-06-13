var fs  = require("fs");
var output = 0;

var calc = function (result, index, depth, src) {
  if (depth === 4) {
    if (result === 0)
      output += 1;
    return;
  } else {
    for (var i = index, ed = src.length - 4 + depth; i <= ed; i++) {
      calc(result + src[i], i + 1, depth + 1, src);
    }
  }
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var arr = line.split(',').map(function (item) {
      return parseInt(item);
    });
    output = 0;
    calc(0, 0, 0, arr);
    console.log(output);
  }
});