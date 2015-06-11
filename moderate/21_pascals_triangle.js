var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var num = parseInt(line);
    var result = [1];
    if (num >= 2) {
      for (var i = 2; i <= num; i++) {
        result.push(1);
        var st = (1 + i - 2) * (i - 2) / 2;
        for (var j = 1; j <= i - 2; j++) {
          result.push(result[st + j - 1] + result[st + j]);
        }
        result.push(1);
      }
    }
    console.log(result.join(' '));
  }
});