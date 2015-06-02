var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var X = parseInt(line.split(';')[1]);
    var nums = line.split(';')[0].split(',');
    var result = [];
    for (var i = 0, j = nums.length - 1; i < j;) {
      numI = parseInt(nums[i]);
      numJ = parseInt(nums[j]);
      if (numI + numJ > X) {
        j -= 1;
      } else if (numI + numJ < X) {
        i += 1;
      } else {
        result.push(nums[i] + ',' + nums[j]);
        i += 1;
        j -= 1;
      }
    }
    if (result.length > 0)
      console.log(result.join(';'));
    else
      console.log('NULL');
  }
});
