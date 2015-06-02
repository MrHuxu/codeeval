fs = require("fs");

var detect = function (arr, pos) {
  var result = null;
  for (var i = 1, len = arr.length; pos + i * 2 - 1 <= len - 1; i++) {
    var flag = true;
    for (var j = 1; j <= i; j++) {
      if (arr[pos + j - 1] !== arr[pos + j + i - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result = i;
      break;
    }
  }
  return result;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var nums = line.split(' ');
  for (var i = 0, len = nums.length; i < len; i++) {
    if (loopLen = detect(nums, i)) {
      console.log(nums.slice(i, i + loopLen).join(' '));
      break;
    }
  }
});
