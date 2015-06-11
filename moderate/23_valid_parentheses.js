var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var left = ['{', '[', '('], right = ['}', ']', ')'];
    var result = [];
    for (var i = 0, len = line.length; i < len; i++) {
      if (left.indexOf(line[i]) !== -1)
        result.push(line[i]);
      else if (right.indexOf(line[i]) !== -1) {
        if (result[result.length - 1] === left[right.indexOf(line[i])])
          result.pop();
        else {
          result.push(line[i]);
        }
      }
    }
    console.log(result.length ? 'False' : 'True');
  }
});