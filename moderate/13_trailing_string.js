var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var strA = line.split(',')[0];
    var strB = line.split(',')[1];
    var flag = true, lenA = strA.length, lenB = strB.length;
    for (var i = 1; i <= lenB; ++i) {
      if (strA[lenA - i] !== strB[lenB - i]) {
        flag = false;
        break;
      }
    }
    console.log(flag ? 1 : 0);
  }
});
