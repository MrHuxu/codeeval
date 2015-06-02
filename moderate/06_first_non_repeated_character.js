var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var rate = {}, chars = [];
    for (var i = 0, len = line.length; i < len; i++) {
      if (rate[line[i]] === undefined) {
        rate[line[i]] = 1;
        chars.push(line[i]);
      } else 
        rate[line[i]] += 1;
    } 
    for (var i = 0, len = chars.length; i < len; i++) {
      if (rate[chars[i]] === 1) {
        console.log(chars[i]);
        break;
      }
    }
  }
});
