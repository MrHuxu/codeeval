var fs = require('fs');

var reverse = function (num) {
  var srcArr = num.toString().split('');
  var distArr = [];
  while (tmp = srcArr.pop()) {
    distArr.push(tmp);
  }
  return parseInt(distArr.join(''));
};

var isPalindrome = function (num) {
  var str = num.toString();
  for (var i = 0, j = str.length - 1; i <= j; ++i, --j) {
    if (str[i] !== str[j]) {
      return false;
      break;
    }
  }
  return true;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var num = parseInt(line), times = 1;
    while (++times) {
      if (isPalindrome(num))
        break;
      num = num + reverse(num);
    }
    console.log((times - 2) + ' ' + num);
  }
});