var fs  = require("fs");

var check = function (str, st, depth) {
  for (var i = st, len = str.length; i < len; i++) {
    if (str[i] === '(')
      depth += 1;
    else if (str[i] === ')')
      depth -= 1;
    else if (str[i] === ':' && i < len - 1) {
      var next = str[i + 1];
      if (next === '(')
        return (check(str, i + 2, depth) || check(str, i + 2, depth + 1));
      else if (next === ')' && depth > 0)
        return (check(str, i + 2, depth) || check(str, i + 2, depth - 1));
      else if (next === ')' && depth <= 0)
        return check(str, i + 2, depth);
    }
    if (depth < 0)
      return false;
  }
  if (depth === 0)
    return true;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(check(line, 0, 0) ? 'YES' : 'NO');
  }
});