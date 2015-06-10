var fs  = require("fs");

Number.prototype.reverse = function() {
  return parseInt(this.toString(10).split('').reverse().join(''), 10);
};

var isPalindrome = function (num){
  var str = num.toString(10);
  for (var i = 0, j = str.length-1; i <= j; i++, j--){
    if (str[i] !== str[j])
      return false;
  }
  return true;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line){
  if (line !== "") {
    var num = parseInt(line, 10);
    var iterate = 0;
    while (!isPalindrome(num)){
      num += num.reverse();
      iterate++;
    }
    console.log(iterate + " " + num);
  }
});