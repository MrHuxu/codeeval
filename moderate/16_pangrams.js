var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var rate = {};

    for (var i = 97; i <= 122; ++i)
      rate[i] = 0;

    for (var i = 0, len = line.length; i < len; ++i) {
      if (line[i].charCodeAt() >= 65 && line[i].charCodeAt() <= 90)
        rate[line[i].charCodeAt() + 32] += 1;
      else if (line[i].charCodeAt() >= 97 && line[i].charCodeAt() <= 122)
        rate[line[i].charCodeAt()] += 1;
    }

    var result = [];
    for (var i = 97; i <= 122; ++i) {
      if (rate[i] === 0)
        result.push(String.fromCharCode(i));
    }
    result.length === 0 ? console.log('NULL') : console.log(result.join(''));
  }
});
