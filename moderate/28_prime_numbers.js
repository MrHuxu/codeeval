var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var N = parseInt(line);
    var frequence = {}, output = [];
    for (var i = 3; i <= Math.ceil(N / 2); i++) {
      for (var j = i; j <= N; j += i) {
        if (frequence[j] === undefined)
          frequence[j] = 1;
        else
          frequence[j] += 1;
      }
    }
    if (N > 2) {
      output.push(2);
      for (var i = 3; i <= Math.ceil(N / 2); i++) {
        if (frequence[i] === 1 && i % 2 !== 0)
          output.push(i);
      }
      for (var i = Math.ceil(N / 2) + 1; i < N; i++) {
        if (frequence[i] === undefined && i % 2 !== 0)
          output.push(i);
      }
    }
    console.log(output.join(','));
  }
});