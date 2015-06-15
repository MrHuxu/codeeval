var fs = require('fs');

var arr = [];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    arr.push(line.split(' ').map(function (item) {
      return parseInt(item);
    }));
  }
});

for (var i = arr.length - 2; i >= 0; i--) {
  for (var j = 0; j <= i; j++) {
    arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
  }
}

console.log(arr[0][0]);