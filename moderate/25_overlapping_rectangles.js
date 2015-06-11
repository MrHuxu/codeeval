var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var nums = line.split(',').map(function (char) {
      return parseInt(char);
    });
    var widthA = Math.abs(nums[0] - nums[2]),
        heightA = Math.abs(nums[1] - nums[3]),
        coreAx = (nums[0] + nums[2]) / 2,
        coreAy = (nums[1] + nums[3]) / 2,
        widthB = Math.abs(nums[4] - nums[6]),
        heightB = Math.abs(nums[5] - nums[7]),
        coreBx = (nums[4] + nums[6]) / 2,
        coreBy = (nums[5] + nums[7]) / 2;
    if (Math.abs(coreAx - coreBx) <= (widthA + widthB) / 2 && Math.abs(coreAy - coreBy) <= (heightA + heightB) / 2)
      console.log('True');
    else 
      console.log('False');
  }
});