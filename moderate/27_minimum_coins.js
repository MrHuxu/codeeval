var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var total = parseInt(line);
    var output = 0;
    while (total >= 5) {
      total -= 5;
      output += 1;
    }
    while (total >= 3) {
      total -= 3;
      output += 1;
    }
    output += total;
    console.log(output);
  }
});