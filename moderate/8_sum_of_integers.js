var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var nums = line.split(',');
    var init = parseInt(nums[0]);
    var max = init;
    for (var i = 1, len = nums.length; i < len; i++) {
      var num = parseInt(nums[i]);
      if (num > 0) {
        if (init < 0)
          init = 0;
        init = init + num;
        init > max ? max = init : max;
      } else if (num <= 0) {
        if (init + num > 0) {
          init = init + num;
        } else {
          init > max ? max = init : max;
          init = num;
        }
      }
    }
    init > max ? max = init : max;
    console.log(max);
  }
});
