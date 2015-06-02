var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var str = line.split(', ')[0];
    var chr = line.split(', ')[1];
    var result = '';
    for (var i = 0, len = str.length; i < len; i++) {
      if (chr.indexOf(str[i]) === -1)
        result = result + str[i];
    }
    console.log(result);
  }
});
