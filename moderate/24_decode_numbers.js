var fs = require('fs');
var output;

var decode_number = function (num) {
  if (num.length === 0) {
    output += 1;
    return;
  }

  if (num[0] === '0') {
    return;
  } else {
    decode_number(num.slice(1));
    if (parseInt(num.slice(0, 2)) >= 10 && parseInt(num.slice(0, 2)) <= 26)
      decode_number(num.slice(2));
  }
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    output =  0;
    decode_number(line);
    console.log(output);
  }
});