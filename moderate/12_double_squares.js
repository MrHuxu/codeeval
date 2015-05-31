var fs = require('fs')

var nums = fs.readFileSync(process.argv[2]).toString().split('\n');

for (var i = 1; i <= parseInt(nums[0]); ++i) {
  var ans = 0,
      num = parseInt(nums[i]);
  for (var j = 0, max = parseInt(Math.sqrt(num / 2)); j <= max; j++) {
    var other_num = parseInt(Math.sqrt(num - j * j));
    if (other_num * other_num === num - j * j)
      ans += 1;
  } 
  console.log(ans);
}
