var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var nums = line.split(';')[1].split(',');
    var tmp = [];
    for (var i = 0, len = nums.length; i < len; ++i) {
      if (tmp.indexOf(nums[i]) === -1)
        tmp.push(nums[i]);
      else {
        console.log(nums[i]);
        break;
      }
    }
  }
});
