var fs  = require("fs");

var same = function (src, dist) {
  for (var i = 0, len = src.length; i < len; i++) {
    if ((src + src.slice(0, i)).indexOf(dist) !== -1)
      return true;
  }
  return false;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var src = line.split(',')[0];
    var dist = line.split(',')[1];

    console.log(same(src, dist) ? 'True' : 'False');
  }
});