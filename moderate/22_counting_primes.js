var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var st = parseInt(line.split(',')[0]);
    var ed = parseInt(line.split(',')[1]);
    var result = {};
    for (var i = st; i <= ed; i++)
      result[i] = 0;
    for (var i = 2; i <= ed; i++) {
      for (var j = i * parseInt(st / i); j <= ed; j += i) {
        if (result[j] !== undefined)
          result[j]++;
      }
    }
    var output = 0;
    for (var i = st; i <= ed; i++) {
      if (result[i] === 1 || result[i] === 0)
        output++;
    }
    console.log(output);
  }
});