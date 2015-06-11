var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var arr = line.split(';')[0].split(',');
    var k = parseInt(line.split(';')[1]);
    var output = [], tmp;
    while (arr.length >= k) {
      tmp = arr.splice(0, k);
      output = output.concat(tmp.reverse());
    }
    console.log(output.concat(arr).join(','));
  }
});