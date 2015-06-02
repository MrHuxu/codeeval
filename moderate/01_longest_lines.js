fs = require("fs");

var lines = fs.readFileSync(process.argv[2]).toString().split('\n');
var num = parseInt(lines.shift());
lines.sort(function (strA, strB) {
  return strB.length - strA.length;
});

for (var i = 0; i < num; i++) {
  console.log(lines[i]);
}
