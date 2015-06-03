var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var result = [];
    var n = parseInt(line.split(' ')[0]);
    var nums = line.split(' ').slice(1);
    for (var i = 1, len = nums.length - 1; i <= len; ++i) {
      result.push(Math.abs(nums[i - 1] - nums[i]));
    }
    for (var i = 1; i <= n - 1; ++i) {
      if (result.indexOf(i) === -1) {
        console.log('Not jolly');
        return;
      }
    }
    console.log('Jolly');
  }
});
