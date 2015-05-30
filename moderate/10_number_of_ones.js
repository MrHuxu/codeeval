var fs = require('fs')

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var num = parseInt(line);
    switch (num) {
      case 0:
        console.log('0');
        break;
      case 1:
        console.log('1');
        break;
      default:
        var result = 0;
        while (num > 1) {
          num % 2 === 1 ? result++ : result;
          num = parseInt(num / 2);
        }
        console.log(num === 1 ? result + 1 : result);
        break;
    }
  }
});
